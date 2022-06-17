
const fourSum = (nums, target) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const len = sortedNums.length;
  let res = [];
  const obj = {};
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const num1 = sortedNums[i];
      const num2 = sortedNums[j];
      const residual = target - num1 - num2;
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const leftNum = sortedNums[left];
        const rightNum = sortedNums[right];
        const sumTwo = leftNum + rightNum;
        if (sumTwo === residual) {
          if (!(obj[num1] && obj[num1][num2] && obj[num1][num2][leftNum])) {
            res.push([num1, num2, leftNum, rightNum]);
            if (!obj[num1]) {
                obj[num1] = {[num2]: {[leftNum]: true}};
            } else {
              if (!obj[num1][num2]) {
                  obj[num1][num2] = {[leftNum]: true};
              } else {
                  obj[num1][num2][leftNum] = true;
              }
            }
          }
          left++;
        } else if (sumTwo < residual) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};

// console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0));