const numPairsDivisibleBy60 = (time) => {
  const asObj = {};
  let ct = 0;
  for (const num of time) {
    const mod = num % 60;
    if (mod === 0 && asObj[0]) {
      ct += asObj[0].length;
    } else if (mod !== 0 && asObj[60 - mod]) {
      ct += asObj[60 - mod].length;
    }
    if (asObj[mod]) {
      asObj[mod].push(num);
    } else {
      asObj[mod] = [num];
    }
  }
  return ct;
};
