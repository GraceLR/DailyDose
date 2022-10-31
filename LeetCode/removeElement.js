const removeElement = (nums, val) => {
  let ct = 0;
  const asObj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (num === val || asObj[i]) {
      ct++;
      let notFound = true;
      for (let j = i + 1; j < len; j++) {
        const numNew = nums[j];
        if (numNew !== val && !asObj[j]) {
          nums[i] = numNew;
          asObj[j] = true;
          notFound = false;
          break;
        }
      }
      if (notFound) {
        return i;
      }
    }
  }
};
