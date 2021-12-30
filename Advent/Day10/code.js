
const { test, real } = require("./input");

const middleScore = arr => {
  const sortedScore = arr.sort((a, b) => a - b);
  return sortedScore[(sortedScore.length - 1)/2];
}

const day10Part1 = input => {
  let points = 0;
  let pointsP2 = [];
  const trace = input.map(_str => []);
  loop1:
  for(let i = 0; i < input.length; i++) {
    loop2:
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === '(' || input[i][j] === '[' ||
      input[i][j] === '{' || input[i][j] === '<') {
        trace[i][j] = 'o';
      }
      if(input[i][j] === ')') {
        trace[i][j] = ')';
        for(let k = trace[i].length - 2; k >= 0; k--) {
          if(k === 0 && trace[i][k] !== 'o') {
            points += 3;
          }
          if(trace[i][k] === 'o') {
            if(input[i][k] !== '(') {
              points += 3;
              break loop2;
            } else {
              trace[i][k] = '(';
              break;
            }
          }
        }
      }
      if(input[i][j] === ']') {
        trace[i][j] = ']';
        for(let k = trace[i].length - 2; k >= 0; k--) {
          if(k === 0 && trace[i][k] !== 'o') {
            points += 57;
          }
          if(trace[i][k] === 'o') {
            if(input[i][k] !== '[') {
              points += 57;
              break loop2;
            } else {
              trace[i][k] = '[';
              break;
            }
          }
        }
      }
      if(input[i][j] === '}') {
        trace[i][j] = '}';
        for(let k = trace[i].length - 2; k >= 0; k--) {
          if(k === 0 && trace[i][k] !== 'o') {
            points += 1197;
          }
          if(trace[i][k] === 'o') {
            if(input[i][k] !== '{') {
              points += 1197;
              break loop2;
            } else {
              trace[i][k] = '{';
              break;
            }
          }
        }
      }
      if(input[i][j] === '>') {
        trace[i][j] = '>';
        for(let k = trace[i].length - 2; k >= 0; k--) {
          if(k === 0 && trace[i][k] !== 'o') {
            points += 25137;
          }
          if(trace[i][k] === 'o') {
            if(input[i][k] !== '<') {
              points += 25137;
              break loop2;
            } else {
              trace[i][k] = '<';
              break;
            }
          }
        }
      }
      if(j === input[i].length - 1) {
        let pointPush = 0;
        for(let k = trace[i].length - 1; k >= 0; k--) {
          if(trace[i][k] === 'o') {
            if(input[i][k] === '(') {
              pointPush = (pointPush * 5) + 1;
            } else if(input[i][k] === '[') {
              pointPush = (pointPush * 5) + 2;
            } else if(input[i][k] === '{') {
              pointPush = (pointPush * 5) + 3;
            } else if(input[i][k] === '<') {
              pointPush = (pointPush * 5) + 4;
            }
          }
        }
        pointsP2.push(pointPush);
      }
    }
  }
  return middleScore(pointsP2);
};

console.log(day10Part1(test));
console.log(day10Part1(real));