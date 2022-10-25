const maxSubArray = (nums) => {
  const len = nums.length;
  let maxSum = nums[len - 1];
  let sum = Math.max(0, nums[len - 1]);
  for (let i = len - 2; i >= 0; i--) {
    const num = nums[i];
    maxSum = Math.max(maxSum, num);
    if (num >= 0 && nums[i + 1] < 0) {
      sum = Math.max(0, sum);
    } else if (num < 0 && nums[i + 1] >= 0) {
      maxSum = Math.max(maxSum, sum);
    }
    sum += num;
  }
  return nums[0] >= 0 ? Math.max(sum, maxSum) : maxSum;
};
console.log(maxSubArray([5, 4, -1, 7, 8]));
