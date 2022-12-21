const mergeNums = (nums1, m, nums2, n) => {
  let posFill = m + n - 1;
  let posCompare = m - 1;
  for (let i = n - 1; i >= 0; i--) {
    const num2 = nums2[i];
    const num1 = nums1[posCompare];
    if (num1 < num2 || num1 === undefined) {
      nums1[posFill] = num2;
    } else {
      nums1[posFill] = num1;
      posCompare--;
      i++;
    }
    posFill--;
  }
  return nums1;
};
