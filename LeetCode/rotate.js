const rotate = (matrix) => {
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
