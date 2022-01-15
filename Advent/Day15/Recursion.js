
const { test, real } = require("./input");

const eqPos = (pos1, pos2) => {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1] ? true : false;
};

const seen = input => {
  let matrixSeen = [];
  for (let i = 0; i < input.length; i++) {
    const row = [];
    for (let j = 0; j < input[i].length; j++) {
      row.push(0);
    }
    matrixSeen.push(row);
  }
  return matrixSeen;
};

const base1 = [test.length - 2, test[0].length - 1];
const base2 = [test.length - 1, test[0].length - 2];
const base3 = [test.length - 2, test[0].length - 2];

const rec = (input, step, seen) => {

  const i = step[0];
  const j = step[1];

  // if any of nextSteps is the end, no need to try other steps
  if (eqPos(step, base1) || eqPos(step, base2) || eqPos(step, base3)) {
    seen[i][j] = 0;
    return;
  }

  //bring some base cases down so that less paths are tried

  seen[i][j] = 1;

  let nextSteps;
  // edges of the map
  if (
    (i === input.length - 1 || i === input.length - 2 ||
      i === 0 || i === 1) &&
    (j === input[0].length - 1 || j === input[0].length - 2 ||
      j === 0 || j === 1)) {
    nextSteps = [[i, j + 1], [i + 1, j]];
  } else if (i === input.length - 1 || i === input.length - 2 ||
      i === 0 || i === 1) {
    nextSteps = [[i, j + 1], [i + 1, j], [i - 1, j]];
  } else if (j === input[0].length - 1 || j === input[0].length - 2 ||
        j === 0 || j === 1) {
    nextSteps = [[i, j + 1], [i + 1, j], [i, j - 1]];
  } else {
    nextSteps = [[i, j + 1], [i + 1, j], [i, j - 1], [i - 1, j]];
  }

  // set the adjacent seen0 steps seen = 2;
  const markedSteps = []; //////
  nextSteps.forEach((ns) => {
    const nsi = ns[0];
    const nsj = ns[1];

    // bring base case here so that less paths are tried
    if (seen[nsi] !== undefined && seen[nsi][nsj] !== undefined &&
      seen[nsi][nsj] === 0) {
      markedSteps.push(ns);
      seen[nsi][nsj] = 2;
    }
  });
  
  markedSteps.forEach((nextStep) => {

    rec(input, nextStep, seen);
    if ((!eqPos(nextStep, base1) && !eqPos(nextStep, base2) && !eqPos(nextStep, base3))) {
      seen[nextStep[0]][nextStep[1]] = 2; // base3 ?
    }

  });
  markedSteps.forEach(st => {
    seen[st[0]][st[1]] = seen[st[0]][st[1]] === 2 ? 0 : seen[st[0]][st[1]];
  });
  seen[i][j] = 0;
  return;
};

console.log(rec(test, [0, 0], seen(test)));