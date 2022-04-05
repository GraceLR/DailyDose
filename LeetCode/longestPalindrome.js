
const reverse = str => {

  let res = '';

  for (let i = str.length - 1; i >= 0; i--) {

    res += str[i];

  }

  return res;

};

const longestPalindrome = s => {

  const sLen = s.length;
  const revS = reverse(s);

  for (let subLen = sLen; subLen > 0; subLen--) {

    const bound = sLen - subLen;

    for (let i = 0; i <= bound; i++) {

      const sSub = s.substr(i, subLen);
      const revSub = revS.substr(bound - i, subLen);

      if (sSub === revSub) {

        return sSub;

      }

    }

  }

};
