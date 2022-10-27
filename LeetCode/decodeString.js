const rep = (str, num) => {
  let res = str;
  for (let i = 1; i < num; i++) {
    res += str;
  }
  return res;
};
var decodeString = function (s) {
  const rec = (pos) => {
    let num = s[pos];
    let newI;
    for (let i = pos + 1; i < s.length; i++) {
      const l = s[i];
      if (l === "[") {
        newI = i + 1;
        break;
      }
      num += l;
    }
    num = Number(num);
    let str = "";
    for (let i = newI; i < s.length; i++) {
      const l = s[i];
      if (l === "]") {
        return { str: rep(str, num), i };
      } else if (!isNaN(Number(l))) {
        const res = rec(i);
        str += res.str;
        i = res.i;
      } else {
        str += l;
      }
    }
  };
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    if (!isNaN(Number(l))) {
      const res = rec(i);
      str += res.str;
      i = res.i;
    } else {
      str += l;
    }
  }
  return str;
};
