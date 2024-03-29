const numIslands = (grid) => {
  const gridMark = grid.map((arr) => arr.map((ele) => "0"));
  let count = 0;
  const rec = (i, j) => {
    gridMark[i][j] = "1";
    if (grid[i][j + 1] === "1" && gridMark[i][j + 1] === "0") {
      rec(i, j + 1);
    }
    if (grid[i][j - 1] === "1" && gridMark[i][j - 1] === "0") {
      rec(i, j - 1);
    }
    if (
      grid[i + 1] !== undefined &&
      grid[i + 1][j] === "1" &&
      gridMark[i + 1][j] === "0"
    ) {
      rec(i + 1, j);
    }
    if (
      grid[i - 1] !== undefined &&
      grid[i - 1][j] === "1" &&
      gridMark[i - 1][j] === "0"
    ) {
      rec(i - 1, j);
    }
    return;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && gridMark[i][j] === "0") {
        rec(i, j);
        count++;
      }
    }
  }
  return count;
};
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
