const subarraySum = (nums, k) => {
  let sum = 0;
  const map = { 0: 1 };
  let ct = 0;
  nums.forEach((num) => {
    sum += num;
    if (map[sum - k]) {
      ct += map[sum - k];
    }
    if (map[sum]) {
      map[sum] += 1;
    } else {
      map[sum] = 1;
    }
  });
  return ct;
};
