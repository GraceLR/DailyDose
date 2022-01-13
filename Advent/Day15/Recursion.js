
const { test, real } = require("./input");

const seen = input => {
  let matrixSeen = [];
  for(let i = 0; i < input.length; i++) {
    const row = [];
    for(let j = 0; j < input[i].length; j++) {
      row.push(0);
    }
    matrixSeen.push(row);
  }
  return matrixSeen;
};

const rec = (input, step, seen) => {
  const i = step[0];
  const j = step[1];
  if(i === input.length - 1 && j === input[0].length - 1) {
    return Number(input[i][j]);
  } else if(input[i] === undefined || input[i][j] === undefined || 
    seen[i][j] === 1) {
    return undefined;
  }
  seen[i][j] = 1;
  const nextSteps = [[i, j + 1], [i, j - 1], [i + 1, j], [i - 1, j]];
  let ret = undefined;
  nextSteps.forEach(nextStep => {
    const stepRisk = rec(input, nextStep, seen);
    if(stepRisk !== undefined) {
      ret = ret === undefined ? stepRisk : Math.min(ret, stepRisk);
    } 
  });
  seen[i][j] = 0;
  return ret === undefined ? undefined : ret + Number(input[i][j]);
};

console.log(rec(test, [0, 0], seen(test)) - Number(test[0][0]));