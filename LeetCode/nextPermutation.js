const nextPermutation = nums => {
    let left = undefined;
    let leftPos = undefined;
    const len = nums.length;
    for (let i = len - 2; i >= 0; i--) {
        const num = nums[i]
        if (num < nums[i + 1]) {
            left = num;
            leftPos = i;
            break;
        }
        if (i === 0) {
            return nums.sort((a, b) => a - b);
        }
    }
    for (let i = len - 1; i > leftPos; i--) {
        const num = nums[i]
        if (num > left) {
            nums[leftPos] = num;
            nums[i] = left;
            break;
        }
    }
    let j = len - 1;
    let i = leftPos + 1;
    while (i < j) {
        const num = nums[i];
        nums[i] = nums[j];
        nums[j] = num;
        i++;
        j--;
    }
    return nums;
};