const isValidSudoku = (board) => {
  const rows = [];
  const cols = [];
  const boxes = [];
  [rows, cols, boxes].forEach((ele) => {
    for (let i = 0; i < 9; i++) {
      ele[i] = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
      };
    }
  });
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== ".") {
        if (!rows[i][num]) {
          rows[i][num] = true;
        } else {
          return false;
        }
        if (!cols[j][num]) {
          cols[j][num] = true;
        } else {
          return false;
        }
        const pos = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (!boxes[pos][num]) {
          boxes[pos][num] = true;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
