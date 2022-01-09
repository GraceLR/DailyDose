
const { test, real } = require("./input");

const objRule = input => {
  let obj = {};
  input.forEach(arr => {
    if(obj[arr[0]] === undefined) {
      obj[arr[0]] = {};
    }
    obj[arr[0]][arr[1]] = arr[2];
  });
  return obj;
};

const ct = str => {
  let obj = {};
  str.split('').forEach(char => {
    if(obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  });
  return obj;
};

const minMax = obj => {
  const chars = Object.keys(obj);
  let min = obj[chars[0]];
  let max = 0;
  chars.forEach(char => {
    if(obj[char] > max) {
      max = obj[char];
    }
    if(obj[char] < min) {
      min = obj[char];
    }
  });
  return { min, max };
};

const day14Part1 = (start, ruleObj, rnum) => {
  let newStart = start;
  for(let t = 1; t <= rnum; t++) {
    let temp = '';
    for(let i = 0; i < newStart.length; i++) {
      if(i === newStart.length - 1) {
        temp += newStart[i];
        break;
      }
      temp += newStart[i];
      if(ruleObj[newStart[i]] !== undefined && 
        ruleObj[newStart[i]][newStart[i + 1]] !== undefined) {
          temp += ruleObj[newStart[i]][newStart[i + 1]];
        }
    }
    newStart = temp;
  }
  return minMax(ct(newStart)).max - minMax(ct(newStart)).min;
};

console.log(day14Part1(real.start, objRule(real.rule), 10))