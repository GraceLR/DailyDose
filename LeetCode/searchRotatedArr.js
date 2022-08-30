const search = (nums, target) => {
    const len = nums.length;
    if (len === 1 && nums[0] === target) {
        return 0;
    }
    let left = 0;
    let right = len - 1;
    let mid = Math.floor((len - 1) / 2);
    const midFunc = (left, right) => {
        return Math.floor((left + right) / 2);
    };
    while (left < right) {
        const midNum = nums[mid];
        const leftNum = nums[left];
        const rightNum = nums[right];
        if (midNum === target) {
            return mid;
        }
        if (leftNum === target) {
            return left;
        }
        if (rightNum === target) {
            return right;
        }
        if (midNum > leftNum) {
            if (midNum > target) {
                if (leftNum < target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                left = mid + 1;
            }
        } else if (midNum < leftNum) {
            if (midNum < target) {
                if (leftNum > target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                right = mid - 1;
            }
        } else {
            return -1;
        }
        mid = midFunc(left, right);
    }
    return -1;
};