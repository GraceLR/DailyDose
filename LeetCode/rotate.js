const rotate_v1 = (matrix) => {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    matrix.unshift([]);
  }
  const newLen = matrix.length;
  for (let i = newLen - 1; i >= len; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[j][newLen - 1 - i] = matrix[i][j];
    }
  }
  for (let i = newLen - 1; i >= len; i--) {}
  matrix.splice(len, len);
  return matrix;
};

const rotate_v2 = (matrix) => {
  const len = matrix.length;
  const n = Math.floor(len / 2);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < len - 1 - i; j++) {
      let ct = 0;
      let prev = matrix[i][j];
      let nexti = j;
      let nextj = len - 1 - i;
      while (ct < 4) {
        const current = matrix[nexti][nextj];
        matrix[nexti][nextj] = prev;
        prev = current;
        if (ct === 3) {
          break;
        }
        const jsave = nextj;
        nextj = len - 1 - nexti;
        nexti = jsave;
        ct++;
      }
    }
  }
  return matrix;
};
