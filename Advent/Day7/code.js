
const { test, real } = require("./input");

const sum = arr => {
  let sum = 0;
  arr.forEach(ele => sum += ele);
  return sum;
};

const min = input => {
  let min = input[0];
  input.forEach(num => {
    if(num < min) {
      min = num;
    }
  });
  return min;
};

const day7Part1 = input => {
  const cost = input.map(pos => {
    return input.map(ele => {
      return ele - pos < 0 ? -(ele - pos) : ele - pos;
    });
  });
  return min(cost.map(ele => sum(ele)));
}

console.log(day7Part1(test));
console.log(day7Part1(real));


