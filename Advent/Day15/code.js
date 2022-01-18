
const { test, real , test2} = require("./input");

// takes number of input[i][j] into paths choosing. Costly paths were not steped on.

const rec = (input) => {
  const costMap = input.map(i => i.split('').map(_ => Number.MAX_VALUE));
  costMap[0][0] = 0;

  const queue = [];
  queue.push({ x: 0, y: 0 });

  const tryDirection = (nextY, nextX, nextCost) => {
    if (nextY >= 0 && nextY < input.length &&
      nextX >= 0 && nextX < input[0].length &&
      costMap[nextY][nextX] > nextCost) {
      costMap[nextY][nextX] = nextCost;
      // if { x: nextX, y: nextY } don't exist, then // can optimize on large [] with adding { queue }
      queue.push({ x: nextX, y: nextY });
    }
  };
  while (queue.length > 0) {
    const { x, y } = queue.shift();
    const nextCost = costMap[y][x] + Number(input[y][x]);

    tryDirection(y - 1, x, nextCost);
    tryDirection(y, x - 1, nextCost);
    tryDirection(y + 1, x, nextCost);
    tryDirection(y, x + 1, nextCost);
  }

  return costMap[costMap.length - 1][costMap[0].length - 1] - Number(input[0][0]) + Number(input[input.length - 1][input[0].length - 1]);

};

console.log(rec(real));