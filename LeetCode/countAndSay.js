const countAndSay = (n) => {
  let res = "11";
  if (n === 1) {
    return "1";
  } else if (n === 2) {
    return "11";
  } else {
    let i = 2;
    while (i < n) {
      i++;
      const len = res.length;
      let newRes = "";
      let ct = 1;
      for (let j = 1; j < res.length; j++) {
        if (res[j] === res[j - 1]) {
          ct++;
          if (j === len - 1) {
            newRes += ct + res[j - 1];
            break;
          }
        } else {
          newRes += ct + res[j - 1];
          if (j === len - 1) {
            newRes += 1 + res[j];
            break;
          }
          ct = 1;
        }
      }
      res = newRes;
    }
  }
  return res;
};
