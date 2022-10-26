const spiralOrder = (matrix) => {
  const len = matrix.length;
  const arrLen = matrix[0].length;
  const rounds = Math.ceil(Math.min(arrLen / 2, len / 2));
  const result = [];
  for (let i = 0; i < rounds; i++) {
    for (let j = i; j < len - i; j++) {
      if (j === i) {
        for (let k = i; k < arrLen - i; k++) {
          result.push(matrix[j][k]);
        }
      } else if (j === len - 1 - i) {
        for (let k = arrLen - 1 - i; k >= i; k--) {
          result.push(matrix[j][k]);
        }
      } else {
        result.push(matrix[j][arrLen - 1 - i]);
      }
    }
    if (i < rounds - 1 || arrLen % 2 === 0) {
      for (let j = len - 2 - i; j >= i + 1; j--) {
        result.push(matrix[j][i]);
      }
    }
  }
  return result;
};
