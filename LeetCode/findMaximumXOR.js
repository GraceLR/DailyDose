

const findMaximumXOR = nums => {

  const numsSorted = nums.sort((a, b) => b - a);
  let objBin = {};

  for (let i = 0; i < numsSorted.length; i++) {

    const num = numsSorted[i];
    const bin = num.toString(2);
    const binLen = bin.length;

    for (let j = binLen - 1; j >= 0; j--) {
      if (objBin[binLen - 1 - j] === undefined) {
        objBin[binLen - 1 - j] = {};
      }
      if (objBin[binLen - 1 - j][bin[j]] === undefined) {
        objBin[binLen - 1 - j][bin[j]] = {};
      }
      objBin[binLen - 1 - j][bin[j]][i] = true;
    }

  }

  const binPos = Object.keys(objBin).sort((a, b) => b - a);
  const maxLenBins = Object.keys(objBin[binPos[0]][[1]]);

  const rec = (ele, arr, pos) => {

    if (arr.length === 1) {
      return arr;
    }
    if (pos === -1) {
      return arr;
    }

    for (let j = 0; j <= 1; j++) {
      if (objBin[pos][j] === undefined) {
        return rec(ele, arr, pos - 1);
      } else if (objBin[pos][j][ele] === undefined) {
        let nextArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (objBin[pos][j][arr[i]]) {
            nextArr.push(arr[i]);
          }
        }
        if (nextArr.length === 0) {
          return rec(ele, arr, pos - 1);
        } else {
          return rec(ele, nextArr, pos - 1);
        }
      }
    }
  };

  let initArr = [];
  for (let i = Number(maxLenBins[maxLenBins.length - 1]) + 1; i < nums.length; i++) {
    initArr.push(i);
  }

  let res = 0;
  maxLenBins.forEach(ele => {
    const posArr = rec(ele, initArr, Number(binPos[0]) - 1);
    const sum = numsSorted[ele] ^ numsSorted[posArr[0]];
    res = sum > res ? sum : res;
  });

  return res;
};


console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]));
