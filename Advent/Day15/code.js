
const { test, real } = require("./input");


const rec = (input) => {
  const costMap = input.map(i => i.split('').map(_ => Number.MAX_VALUE));
  costMap[0][0] = 0;

  const queue = [];
  queue.push({ x: 0, y: 0 });

  const tryDirection = (nextX, nextY, nextCost) => {
    if (nextY >= 0 && nextY < input.length &&
      nextX >= 0 && nextX < input[0].length && // use < instead of <= (equal to seen, will take long to run)
      costMap[nextY][nextX] > nextCost) {
      costMap[nextY][nextX] = nextCost;
      queue.push({ x: nextX, y: nextY });
    }
  };

  while (queue.length > 0) {
    const { x, y } = queue.pop();
    const curCost = costMap[y][x];
    const nextCost = curCost + Number(input[y][x]);

    tryDirection(x - 1, y, nextCost);
    tryDirection(x, y - 1, nextCost);
    tryDirection(x + 1, y, nextCost);
    tryDirection(x, y + 1, nextCost);
  }

  console.log(costMap);

  return costMap[costMap.length - 1][costMap[0].length - 1];

};

console.log(rec(test));