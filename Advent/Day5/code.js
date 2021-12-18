
const { test, real } = require("./input");

const compare = (num1, num2) => {
  return num1 > num2 ? { max: num1, min: num2, indexMax: 0, indexMin: 1} : 
  { max: num2, min: num1,  indexMax: 1, indexMin: 0};
};

const day5 = input => {
  let matrix = [];
  let count = 0;
  input.forEach((line, index) => {
    // console.log(index + '  begin ------')
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

    // diaganal???
 
    if(line[2] - line[0] === line[3] - line[1]) {
      const max = compare(Number(line[1]), Number(line[3])).max;
      const min = compare(Number(line[1]), Number(line[3])).min;
      const indexMin = compare(Number(line[1]), Number(line[3])).indexMin;
      let j = [Number(line[0]), Number(line[2])][indexMin];
      for(let i = min; i <= max; i++) {
        if(matrix[i] === undefined) {
          matrix[i] = [];
        }
        if(matrix[i][j] === undefined) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] += 1;
          if(matrix[i][j] === 2) {
            count += 1;
          }
        }
        j += 1;
      }
    }
    if(line[2] - line[0] === -(line[3] - line[1])) {
      const max = compare(Number(line[1]), Number(line[3])).max;
      const min = compare(Number(line[1]), Number(line[3])).min;
      const indexMin = compare(Number(line[1]), Number(line[3])).indexMin;
      let j = [Number(line[0]), Number(line[2])][indexMin];
      for(let i = min; i <= max; i++) {
        if(matrix[i] === undefined) {
          matrix[i] = [];
        }
        if(matrix[i][j] === undefined) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] += 1;
          if(matrix[i][j] === 2) {
            count += 1;
          }
        }
        // console.log(i)
        // console.log(j)
        j -= 1;
      }
    }

    // console.log(index + '  end ------')
    // console.log(matrix)
  });
  return count;
}

console.log(day5(test));
console.log(day5(real));
