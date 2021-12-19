
const { test, real } = require("./input");

// const sum = arr => {
//   let sum = 0;
//   arr.forEach(ele => sum += ele);
//   return sum;
// };

const day8Part1 = input => {
  let res = 0;
  input.forEach(str => {
    let count = 0;
    for(let i = str.length - 1; i >= 0; i--) {
      if(str[i] === '|') {
        break;
      }
      if(str[i] !== ' ') {
        count += 1;
      } else {
        res = (
          count === 2 || count === 3 || count === 4 || count === 7 ?
          res += 1 : res
        );
        count = 0;
      }
    }
  });
  return res;
}

console.log(day8Part1(test));
console.log(day8Part1(real));


// console.log(day7Part2(test));
// console.log(day7Part2(real));


