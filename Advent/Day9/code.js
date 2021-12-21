
const { test, real } = require("./input");

// const sum = arr => {
//   let sum = 0;
//   arr.forEach(ele => sum += ele);
//   return sum;
// };

const day9Part1 = input => {
  let sum = 0;
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[0].length; j++) {
      let cond = true;
      if(input[i][j - 1] !== undefined) {
        cond = Number(input[i][j]) < Number(input[i][j - 1]) ? cond && true : cond && false;
      }
      if(input[i][j + 1] !== undefined) {
        cond = Number(input[i][j]) < Number(input[i][j + 1]) ? cond && true : cond && false;
      }
      if(input[i - 1] !== undefined) {
        cond = Number(input[i][j]) < Number(input[i - 1][j]) ? cond && true : cond && false;
      }
      if(input[i + 1] !== undefined) {
        cond = Number(input[i][j]) < Number(input[i + 1][j]) ? cond && true : cond && false;
      }
      if(cond) {
        sum += Number(input[i][j]) + 1;
      }
    }
  }
  return sum;
};

console.log(day9Part1(test));
console.log(day9Part1(real));