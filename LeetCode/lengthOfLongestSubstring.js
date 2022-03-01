
const lengthOfLongestSubstring = s => {

    let maxLen = 0;
    let len = 0;
    let obj = {};

    for(let i = 0; i < s.length; i++) {

        const l = s[i];
        if(obj[l] === undefined) {
            len ++;
        } else {
            maxLen = len > maxLen ? len : maxLen;
            len = 1;
            obj = {};
        }
        obj[l] = 1;
    }

    return Math.max(len, maxLen);

};

console.log(lengthOfLongestSubstring('abcabcbb'))