const longestCommonPrefix = strs => {
    let res = '';
    const firstStr = strs[0];
    if (strs.length === 1) {
        return firstStr;
    }
    if (firstStr === '') {
        return '';
    }
    for (let j = 0; j < firstStr.length; j++) {
        const l = firstStr[j];
        for (let i = 1; i < strs.length; i++) {
            const str = strs[i];
            if (str === '') {
                return '';
            }
            if (str[j] !== l) {
                return res;
            }
        }
        res += l;
    }  
    return res;
};