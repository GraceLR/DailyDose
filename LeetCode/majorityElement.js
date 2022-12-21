const majorityElement = (nums) => {
  const ct = nums.length / 2;
  const map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
    if (map[num] > ct) {
      return num;
    }
  }
};
