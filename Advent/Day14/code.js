
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

// const ct = str => {
//   let obj = {};
//   str.split('').forEach(char => {
//     if(obj[char] === undefined) {
//       obj[char] = 1;
//     } else {
//       obj[char] += 1;
//     }
//   });
//   return obj;
// };

// const minMax = obj => {
//   const chars = Object.keys(obj);
//   let min = obj[chars[0]];
//   let max = 0;
//   chars.forEach(char => {
//     if(obj[char] > max) {
//       max = obj[char];
//     }
//     if(obj[char] < min) {
//       min = obj[char];
//     }
//   });
//   return { min, max };
// };

// const day14Part1 = (start, ruleObj, rnum) => {
//   let newStart = start;
//   for(let t = 1; t <= rnum; t++) {
//     let temp = '';
//     for(let i = 0; i < newStart.length; i++) {
//       if(i === newStart.length - 1) {
//         temp += newStart[i];
//         break;
//       }
//       temp += newStart[i];
//       if(ruleObj[newStart[i]] !== undefined && 
//         ruleObj[newStart[i]][newStart[i + 1]] !== undefined) {
//           temp += ruleObj[newStart[i]][newStart[i + 1]];
//         }
//     }
//     newStart = temp;
//   }
//   return minMax(ct(newStart)).max - minMax(ct(newStart)).min;
// };

// console.log(day14Part1(real.start, objRule(real.rule), 40))


const day14Part2 = (start, objRule, rnum) => {
  let objStr = {};
  let count = {};
  for(let i = 0; i < start.length - 1; i++) {
    const fir = start[i];
    const sec = start[i + 1];
    if(objStr[fir] === undefined) {
      objStr[fir] = {};
    }
    objStr[fir][sec] = objStr[fir][sec] === undefined ? 1 : objStr[fir][sec] + 1;
    count[fir] = count[fir] === undefined ? 1 : count[fir] + 1;
    if(i === start.length - 2) {
      count[sec] = count[sec] === undefined ? 1 : count[sec] + 1;
    }
  }
  let rounds = 0;
  while(rounds < rnum) {
    rounds += 1;
    let objStrNext = {};
    const firKeys = Object.keys(objStr);
    firKeys.forEach(firLet => {
      if(objStrNext[firLet] === undefined) {
        objStrNext[firLet] = {};
      }
      if(objRule[firLet] !== undefined) {
        const secKeys = Object.keys(objStr[firLet]);
        secKeys.forEach(secLet => {
          const addNum = objStr[firLet][secLet];
          if(objRule[firLet][secLet] !== undefined) {
            const addLet = objRule[firLet][secLet];
            objStrNext[firLet][addLet] = objStrNext[firLet][addLet] === undefined ?
            addNum : objStrNext[firLet][addLet] + addNum;
            if(objStrNext[addLet] === undefined) {
              objStrNext[addLet] = {};
            }
            objStrNext[addLet][secLet] = objStrNext[addLet][secLet] === undefined ?
            addNum : objStrNext[addLet][secLet] + addNum;
            count[addLet] = count[addLet] === undefined ? 
            addNum : count[addLet] + addNum;
          } else {
            objStrNext[firLet][secLet] = objStrNext[firLet][secLet] === undefined ?
            addNum : objStrNext[firLet][secLet] + addNum;
          }
        });
      }
    });
    objStr = objStrNext;
  }
  return count;
};

console.log(day14Part2(real.start, objRule(real.rule), 40));