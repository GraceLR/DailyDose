const rep = (str, num) => {
  let res = str;
  for (let i = 1; i < num; i++) {
    res += str;
  }
  return res;
};
var decodeString = function (s) {
  const len = s.length;
  const numStack = [];
  const strStack = [];
  let curStr = "";
  let curNum = "";
  for (let i = 0; i < len; i++) {
    const l = s[i];
    const stackLen = numStack.length;
    if (!isNaN(Number(l))) {
      curNum += l;
    } else if (l === "[") {
      numStack.push(Number(curNum));
      strStack.push(curStr);
      curStr = "";
      curNum = "";
    } else if (l === "]") {
      curStr = strStack[stackLen - 1] + rep(curStr, numStack[stackLen - 1]);
      strStack.pop();
      numStack.pop();
    } else {
      curStr += l;
    }
  }
  return curStr;
};
