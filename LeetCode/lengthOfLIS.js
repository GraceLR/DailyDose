const lengthOfLIS = (nums) => {
  const subCt = [1];
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    subCt.push(1);
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && subCt[j] + 1 > subCt[i]) {
        subCt[i] = subCt[j] + 1;
        if (subCt[i] > max) {
          max = subCt[i];
        }
      }
    }
  }
  return max;
};
