
const { test, real } = require("./input");

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

const split = input => {
  for(let i = 0; i <= 1; i++) {
    if(typeof input[i] === 'number' && input[i] >= 10) {
      input[i] = { 0: Math.floor(input[i]/2), 1: Math.ceil(input[i]/2), 
      parent: input };
      return true;
    }
    if(typeof input[i] === 'object') {
      const terminate = split(input[i]);
      if(terminate) {
        return true;
      }
    }
  }
  return false;
};

const explosion = (input, level) => {

  if(typeof input[0] === 'number' && typeof input[1] === 'number' &&
  level >= 4) {

    nodeUp(input, 0, input[0]);
    nodeUp(input, 1, input[1]);

    for(let i = 0; i <= 1; i++) {
      if(input['parent'][i] === input) {
        input['parent'][i] = 0;
        break;
      }
    }

    return true;
  }

  for(let i = 0; i <= 1; i++) {
    if(typeof input[i] === 'object') {
      const terminate = explosion(input[i], level + 1);
      if(terminate) {
        return true;
      }
    }
  }
  return false;
}
  
const tillNoEorS = obj => {
  let res = true;
  while(res) {
    res = explosion(obj, 0) || split(obj);
  }
  return obj;
};

const addition = input => {

  const arr0 = [input[0], input[1]];
  const obj0 = objRec(arr0);
  let nextObj = tillNoEorS(obj0);

  for(let i = 2; i < input.length; i++) {
    let pos1 = objRec(input[i]);
    nextObj = { 0: nextObj, 1: pos1 };
    for(let j = 0; j <= 1; j++) {
      nextObj[j]['parent'] = nextObj;
    }
    tillNoEorS(nextObj);
  }
  return nextObj;
};

day18Part1 = input => {
  if(typeof input[0] === 'number' && typeof input[1] === 'number') {
    for(let i = 0; i <= 1; i++) {
      if(input['parent'][i] === input) {
        input['parent'][i] = (3 * input[0]) + (2 * input[1]);
      }
    }
    return;
  } else {
    for(let i = 0; i <= 1; i++) {
      if(typeof input[i] === 'object') {
       day18Part1(input[i]);
      }
    }
    if(input.parent !== undefined) {
      for(let i = 0; i <= 1; i++) {
        if(input['parent'][i] === input) {
          input['parent'][i] = (3* input[0]) + (2 * input[1]);
        }
      }
    } else {
      return (3* input[0]) + (2 * input[1]);
    }
  }
  return;
};

console.log(day18Part1(addition(real)));

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

