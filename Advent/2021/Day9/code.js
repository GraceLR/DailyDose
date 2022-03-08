
const { test, real } = require("./input");

// const day9Part1 = input => {
//   let sum = 0;
//   for(let i = 0; i < input.length; i++) {
//     for(let j = 0; j < input[0].length; j++) {
//       let cond = true;
//       if(input[i][j - 1] !== undefined) {
//         cond = Number(input[i][j]) < Number(input[i][j - 1]) ? cond && true : cond && false;
//       }
//       if(input[i][j + 1] !== undefined) {
//         cond = Number(input[i][j]) < Number(input[i][j + 1]) ? cond && true : cond && false;
//       }
//       if(input[i - 1] !== undefined) {
//         cond = Number(input[i][j]) < Number(input[i - 1][j]) ? cond && true : cond && false;
//       }
//       if(input[i + 1] !== undefined) {
//         cond = Number(input[i][j]) < Number(input[i + 1][j]) ? cond && true : cond && false;
//       }
//       if(cond) {
//         sum += Number(input[i][j]) + 1;
//       }
//     }
//   }
//   return sum;
// };

// console.log(day9Part1(test));
// console.log(day9Part1(real));

const sum = mat => {
  let sum = 0;
  mat.forEach(arr => arr.forEach(ele => {
    if(ele === 'b') {
      sum += 1;
    }
  }));
  return sum;
};

const subPre = arr => {
  let res = [];
  for(let i = arr.length - 1; i > 0; i--) {
    res.push(arr[i] - arr[i - 1]);
  }
  return res;
};

const ans = arr => {
  const sorted = arr.sort((a,b) => a - b);
  return sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]; 
};

const rec = (input, i, j, trace) => {

  if(i >= input.length || j >= input[0].length || 
    i < 0 || j < 0 || 
    input[i][j] === '9' || trace[i][j] === 'b') {
    return;
  }

  trace[i][j] = 'b';

  rec(input, i, j + 1, trace);
  rec(input, i, j - 1, trace);
  rec(input, i + 1, j, trace);
  rec(input, i - 1, j, trace);
  
  return;
};

const day9Part2 = input => {
  let size = [0];
  let trace = input.map(_str => []);
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[0].length; j++) {
      if(input[i][j] === '9') {
        trace[i][j] = '9';
      } else if (trace[i][j] !== 'b') {
        rec(input, i, j, trace);
        size.push(sum(trace));
      }
    }
  }
  return ans(subPre(size));
};

console.log(day9Part2(test));
console.log(day9Part2(real));