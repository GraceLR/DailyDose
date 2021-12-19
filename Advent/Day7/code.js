
const { test, real } = require("./input");

const sum = arr => {
  let sum = 0;
  arr.forEach(ele => sum += ele);
  return sum;
};

const sumN = n => {
  return (1 + n) * n / 2;
}

const minMax = input => {
  let min = input[0];
  let max = input[0];
  input.forEach(num => {
    if(num < min) {
      min = num;
    }
    if(num > max) {
      max = num;
    }
  });
  return { min, max };
};

// const day7Part1 = input => {
//   const cost = input.map(pos => {
//     return input.map(ele => {
//       return ele - pos < 0 ? -(ele - pos) : ele - pos;
//     });
//   });
//   return min(cost.map(ele => sum(ele)));
// }

// console.log(day7Part1(test));
// console.log(day7Part1(real));

const day7Part2 = input => {
  const position = [];
  let num = minMax(input).min;
  for(let i = 0; i <= minMax(input).max - minMax(input).min; i++) {
    position.push(num);
    num += 1;
  }
  const cost = position.map(pos => {
    return input.map(ele => {
      return ele - pos < 0 ? sumN(-(ele - pos)) : sumN(ele - pos);
    });
  });
  // console.log(cost)
  return minMax(cost.map(ele => sum(ele))).min;
}

console.log(day7Part2(test));
console.log(day7Part2(real));


