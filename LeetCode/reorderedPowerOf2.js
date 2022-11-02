const reorderedPowerOf2 = (n) => {
  const str = n.toString();
  const arr = [];
  for (const s of str) {
    arr.push(Number(s));
  }
  const rec = (arr) => {
    const arrLen = arr.length;
    if (arrLen === 1) {
      return arr;
    }
    const nums = [];
    for (let i = 0; i < arrLen; i++) {
      const num = arr[i];
      const newArr = [];
      for (let j = 0; j < arrLen; j++) {
        if (j !== i) {
          newArr.push(arr[j]);
        }
      }
      const bigNum = num * 10 ** (arrLen - 1);
      const recRes = rec(newArr);
      recRes.forEach((ele) => nums.push(bigNum + ele));
    }
    return nums;
  };
  const resNums = [];
  const len = arr.length;
  if (len === 1) {
    resNums.push(arr[0]);
  } else {
    for (let i = 0; i < len; i++) {
      const d = arr[i];
      if (d !== 0) {
        const input = [];
        for (let j = 0; j < len; j++) {
          if (j !== i) {
            input.push(arr[j]);
          }
        }
        const resRec = rec(input);
        const bigNum = d * 10 ** (len - 1);
        resRec.forEach((ele) => resNums.push(bigNum + ele));
      }
    }
  }
  for (let i = 0; i < resNums.length; i++) {
    const num = resNums[i];
    if (num !== resNums[i - 1]) {
      let nextNum = 1;
      while (num >= nextNum) {
        if (nextNum === num) {
          return true;
        }
        nextNum = nextNum * 2;
      }
    }
  }
  return false;
};
