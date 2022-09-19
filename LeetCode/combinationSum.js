const combinationSum = (candidates, target) => {
  const candidatesCopy = candidates.sort((a, b) => a - b);
  const rec = (i, num, target, arrPrev) => {
    const res = [];
    if (target % num === 0) {
      const n = target / num;
      const copy = [...arrPrev];
      for (let i = 0; i < n; i++) {
        copy.push(num);
      }
      res.push(copy);
    }
    let n = Math.ceil(target / num) - 2;
    while (n > 0) {
      const copy = [...arrPrev];
      const newTarget = target - num * n;
      for (let i = 0; i < n; i++) {
        copy.push(num);
      }
      for (let j = i + 1; j < candidatesCopy.length; j++) {
        const num = candidatesCopy[j];
        if (num > newTarget) {
          break;
        } else {
          const recReturn = rec(j, num, newTarget, copy);
          if (recReturn) {
            recReturn.forEach((arr) => {
              res.push(arr);
            });
          }
        }
      }
      n--;
    }

    return res;
  };
  const res = [];
  for (let i = 0; i < candidatesCopy.length; i++) {
    const recReturn = rec(i, candidatesCopy[i], target, []);
    if (recReturn) {
      recReturn.forEach((arr) => {
        res.push(arr);
      });
    }
  }
  return res;
};
