const containsDuplicate = (nums) => {
  const asObj = {};
  for (const num of nums) {
    if (asObj[num]) {
      return true;
    }
    asObj[num] = true;
  }
  return false;
};
