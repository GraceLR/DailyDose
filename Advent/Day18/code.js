
// const { test, real } = require("./input");

const objRec = input => {

  const nextObj = {};

  input.forEach((ele, index) => {

    if(Array.isArray(ele)) {
      nextObj[index] = objRec(ele);
      nextObj[index].parent = nextObj;
    } else {
      nextObj[index] = ele; 
    }

  });

  return nextObj;
  
};

const nodeDown = (input, pos, num) => {
  const posRev = 1 - pos;
  if(typeof input[posRev] === 'number') {
    input[posRev] += num;
    return;
  } else {
    nodeDown(input[posRev], pos, num);
  }
  return;
};

const nodeUp = (input, pos, num) => {
  if(input.parent === undefined) {
    return;
  }
  if(input['parent'][pos] !== input) {
    if(typeof input['parent'][pos] === 'number') {
      input['parent'][pos] += num;
      return;
    }
    nodeDown(input['parent'][pos], pos, num);
    return;
  } else {
    nodeUp(input.parent, pos, num);
  }
  return;
};


const recOneRound = (input, level) => {

  if(typeof input[0] === 'number' && typeof input[1] === 'number' &&
  level >= 4) {

    nodeUp(input, 0, input[0]);
    nodeUp(input, 1, input[1]);
    for(let i = 0; i <= 1; i++) {
      if(input['parent'][i] === input) {
        input['parent'][i] = 0;
      }
    }

    return true;
  }

  for(let i = 0; i <= 1; i++) {
    if(input[i] >= 10) {
      input[i] = { 0: Math.floor(input[i]/2), 1: Math.ceil(input[i]/2), 
      parent: input };
      return true;
    } 
    if(typeof input[i] === 'object') {
      const terminate = recOneRound(input[i], level + 1);
      if(terminate) {
        return true;
      }
    }
  }
  return false;
}
  
const tillNoEorS = input => {
  let res = true;
  while(res) {
    res = recOneRound(input, 0);
  }
  return input;
};

// // const initialObj = objRec([input[0], input[1]]);
// // const nextObj = { 0: recOneRound(initialObj, 0), 1: objRec(input[i])};
const test = [[[[11,[10,1]], 11], 2],3];
tillNoEorS(objRec(test))

// stack
// const recWithoutRecursion = input => {
//   const stack = [];
//   const parentObj = {};

//   stack.push({ curInput: input, curObj: parentObj });

//   while(stack.length > 0) {
//     var { curInput, curObj } = stack.pop();

//     curInput.forEach((ele, index) => {
//       if (Array.isArray(ele)) {
//         curObj[index] = {};
//         stack.push({ curInput: ele, curObj: curObj[index] });
//       } else {
//         curObj[index] = ele;
//       }
//     });

//   }

//   return parentObj;
// }

// const day18part1 = input => {

  
// };


// console.log(day17part2(253,280,46,73));