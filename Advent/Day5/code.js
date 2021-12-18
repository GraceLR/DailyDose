
const { test, real } = require("./input");

const compare = (num1, num2) => {
  return num1 > num2 ? { max: num1, min: num2} : { max: num2, min: num1};
};

const day5Part1 = input => {
  let matrix = [];
  let count = 0;
  input.forEach((line, index) => {
    if(line[0] === line[2]) {
      const max = compare(Number(line[1]), Number(line[3])).max;
      const min = compare(Number(line[1]), Number(line[3])).min;
      for(let i = min; i <= max; i++) {
        if(matrix[i] === undefined) {
          matrix[i] = [];
        }
        if(matrix[i][line[0]] === undefined) {
          matrix[i][line[0]] = 1;
        } else {
          matrix[i][line[0]] += 1;
          if(matrix[i][line[0]] === 2) {
            count += 1;
          }
        }
      }
    }
    if(line[1] === line[3]) {
      const max = compare(Number(line[0]), Number(line[2])).max;
      const min = compare(Number(line[0]), Number(line[2])).min;
      for(let i = min; i <= max; i++) {
        if(matrix[line[1]] === undefined) {
          matrix[line[1]] = [];
        }
        if(matrix[line[1]][i] === undefined) {
          matrix[line[1]][i] = 1;
        } else {
          matrix[line[1]][i] += 1;
          if(matrix[line[1]][i] === 2) {
            count += 1;
          }
        }
      }
    }
    // console.log(index + '------')
    // console.log(matrix)
  });
  return count;
}

console.log(day5Part1(test));
console.log(day5Part1(real));



// console.log(day5Part2(testDraw, testBoards));
// console.log(day5Part2(realDraw, realBoards));
