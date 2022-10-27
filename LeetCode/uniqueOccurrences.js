const uniqueOccurrences = (arr) => {
  const ct = {};
  for (const num of arr) {
    if (!ct[num]) {
      ct[num] = 1;
    } else {
      ct[num]++;
    }
  }
  const obj = {};
  for (const key in ct) {
    const ctNum = ct[key];
    if (obj[ctNum]) {
      return false;
    } else {
      obj[ctNum] = true;
    }
  }
  return true;
};
