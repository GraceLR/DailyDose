const mySqrt = (x) => {
  let left = 0;
  let right = x;
  let mid = undefined;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const num = mid * mid;
    if (num === x) {
      return mid;
    }
    if (num > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};
