const removeDuplicates = nums => {
    let k = 1;
    const len = nums.length;
    let ct = 1;
    let i = 1;
    while (ct < len) {
        if (nums[i] === nums[i - 1]) {
            const rep = nums.splice(i, 1);
            nums.push(rep);
        } else{
            i++;
            k++;
        }
        ct++;
    }
    return k;
};