

// sliding window

const lengthOfLongestSubstring = s => {

    let left = 0;
    let obj = {};
    let maxLen = 0;
    let len = 0;

    for(let i = 0; i < s.length; i++) {

        const l = s[i];

        if(obj[l] === undefined) {

            len = i - left + 1;

        } else if(obj[l] >= left) {
            
            len = i - left;
            left = obj[l] + 1;
        }

        obj[l] = i;
        maxLen = len > maxLen ? len : maxLen;

    }

    return maxLen;

};


console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbf'))
console.log(lengthOfLongestSubstring("ckilbkd"))
