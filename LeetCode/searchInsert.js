const searchInsert = (nums, target) => {
  const len = nums.length;
  if (len === 1) {
    const num = nums[0];
    if (num >= target) {
      return 0;
    } else {
      return 1;
    }
  }
  let left = 0;
  let right = len - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (nums[left] >= target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    } else if (nums[right] < target) {
      return right + 1;
    }
    const numMid = nums[mid];
    if (numMid === target) {
      return mid;
    } else if (numMid > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  if (nums[left] > target) {
    return left;
  } else {
    return left + 1;
  }
};
