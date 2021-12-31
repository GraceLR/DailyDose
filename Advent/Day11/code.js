
const { test, real } = require("./input");

const nine = input => {
  let ct = 0;
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(Number(input[i][j]) > 9) {
        ct += 1;
        input[i][j] = 0;
      }
    }
  }
  return ct;
};
// console.log(nine([[1,1],[2,2],[3,10],[10,11]]))

const rec = (input, i, j) => {

  input[i][j] = Number(input[i][j]) + 1;

  if(input[i][j] !== 10) {
    return;
  } else {
    if(input[i][j + 1] !== undefined) {
      rec(input, i, j + 1);
    }
    if(input[i][j - 1] !== undefined) {
      rec(input, i, j - 1);
    }
    if(input[i + 1] !== undefined) {
      if(input[i + 1][j] !== undefined) {
        rec(input, i + 1, j);
      }
      if(input[i + 1][j + 1] !== undefined) {
        rec(input, i + 1, j + 1);
      }
      if(input[i + 1][j - 1] !== undefined) {
        rec(input, i + 1, j - 1);
      }
    }
    if(input[i - 1] !== undefined) {
      if(input[i - 1][j] !== undefined) {
        rec(input, i - 1, j);
      }
      if(input[i - 1][j + 1] !== undefined) {
        rec(input, i - 1, j + 1);
      }
      if(input[i - 1][j - 1] !== undefined) {
        rec(input, i - 1, j - 1);
      }
    }    
  }
};

const day11Part1 = (mat, time) => {
  let count = 0;
  const matArr = mat.map(str => str.split(''));
  for(let r = 1; r <= time; r++) {
    matArr.forEach((_arr, i) => matArr.forEach((_ele, j) => {
      rec(matArr, i, j);
    }));
    count += nine(matArr);
  }
  return count;
};

console.log(day11Part1(test, 100));
console.log(day11Part1(real, 100));

