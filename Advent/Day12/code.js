
const { test, real } = require("./input");

// func1(0);

// const func1 = x => {
//   x = x + 1;
//   func2(x);
//   // x = 1;
//   console.log(x);
// };

// const func2 = y => {
//   y += 2;
//   func3(z);
//   // y = 3;
//   console.log(y);
// };

// const func3 = z => {
//   z += 4;
//   // z = 7;
//   console.log(z);
// };



// func1({});

// const func1 = x => {
//   x.a = 1;
//   func2(x); // don't need to x = func2(x)
//   // { a: 1, b: 2, c: 4 }
//   console.log(x);
// };

// const func2 = y => {
//   y.b = 2;
//   func3(y);
//   // { a: 1, b: 2, c: 4 }
//   console.log(y);
// };

// const func3 = z => {
//   z.c = 4;
//   // { a: 1, b: 2, c: 4 }
//   console.log(z);
// };

const temp = input => {
  const steps = Object.keys(input);
  for(let i = 0; i < steps.length; i++) {
    if(input[steps[i]]['count'] === 2) {
      return true;
    }
  }
  return false;
};


const rec = (objMap, step) => {

  if(step === 'end') {
    console.log(step, '-----------')
    return 1;
  } else if(
    objMap[step]['count'] === 2 || 
    (objMap[step]['count'] === 1 && (step === 'start' || temp(objMap)))) {
    return 0;
  }

  objMap[step]['count'] += 1;

  const nextSteps = Object.keys(objMap[step]);
  let roadNum = 0;
  nextSteps.forEach(ele => {
    if(ele !== 'count') {
      roadNum += rec(objMap, ele);
    }
  });

  if(step[0] === step[0].toLowerCase()) {
    objMap[step]['count'] -= 1;
  } else {
    objMap[step]['count'] = 'unlimited';
  }

  return roadNum;

};

const day12Part1 = input => {

  const objMap = {};
  input.forEach(str => {
    for(let i = 1; i < str.length; i++) {
      if(str[i] === '-') {
        if(objMap[str.substring(0, i)] === undefined) {
          objMap[str.substring(0, i)] = {};
          objMap[str.substring(0, i)]['count'] = 
          str.substring(0, i)[0] === str.substring(0, i)[0].toLowerCase() ? 
          0 : 'unlimited';
        }
        if(objMap[str.substring(i + 1)] === undefined) {
          objMap[str.substring(i + 1)] = {};
          objMap[str.substring(i + 1)]['count'] = 
          str.substring(i + 1)[0] === str.substring(i + 1)[0].toLowerCase() ? 
          0 : 'unlimited';
        } 
        objMap[str.substring(0, i)][str.substring(i + 1)] = {};
        objMap[str.substring(i + 1)][str.substring(0, i)] = {};
        break;
      }
    }
  });

  return rec(objMap, 'start');

};

console.log(day12Part1(test));
console.log(day12Part1(real));
