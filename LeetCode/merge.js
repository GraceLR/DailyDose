const merge = (intervals) => {
  const len = intervals.length;
  const sortedInt = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let left = sortedInt[0][0];
  let right = sortedInt[0][1];
  for (let i = 0; i < len; i++) {
    const cur = sortedInt[i];
    const curl = cur[0];
    const curr = cur[1];
    if (curl <= right) {
      left = Math.min(left, curl);
      right = Math.max(right, curr);
    } else {
      result.push([left, right]);
      left = curl;
      right = curr;
    }
    if (i === len - 1) {
      result.push([left, right]);
    }
  }
  return result;
};
