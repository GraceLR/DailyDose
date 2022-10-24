var combinationSum2 = function (candidates, target) {
  const sortedCdd = candidates.sort((a, b) => b - a);
  const len = candidates.length;
  const result = [];
  const binSearch = (pos, target) => {
    if (pos === len - 1 && sortedCdd[pos] === target) {
      return { found: true, pos: pos + 1 };
    }
    let left = pos;
    let right = len - 1;
    let mid = Math.floor((pos + len - 1) / 2);
    while (left < right) {
      if (sortedCdd[left] === target) {
        return { found: true, pos: left + 1 };
      }
      if (sortedCdd[right === target]) {
        return { found: true, pos: right + 1 };
      }
      const numMid = sortedCdd[mid];
      if (numMid === target) {
        return { found: true, pos: mid + 1 };
      } else if (numMid < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
    return { found: false, pos: left };
  };
  const rec = (pos, target, resArr) => {
    if (sortedCdd[len - 1] > target) {
      return;
    }
    for (let i = pos; i < len; i++) {
      const num = sortedCdd[i];
      if (!(i > pos && num === sortedCdd[i - 1])) {
        const newResArr = [...resArr, num];
        if (num === target) {
          result.push(newResArr);
        } else if (num < target) {
          const newTarget = target - num;
          const res = binSearch(i + 1, newTarget);
          let newPos;
          if (res.found) {
            result.push([...newResArr, sortedCdd[res.pos - 1]]);
            for (let i = res.pos; i < len; i++) {
              if (sortedCdd[i] !== newTarget) {
                newPos = i;
                break;
              }
            }
          } else {
            newPos = res.pos;
          }
          if (res.pos !== undefined) {
            rec(newPos, newTarget, newResArr);
          }
        }
      }
    }
    return;
  };
  rec(0, target, []);
  return result;
};
