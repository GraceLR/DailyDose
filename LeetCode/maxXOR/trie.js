


const rec = (bin, depth, obj, pairObj, num) => {

  const binDig = bin[depth];
  const pair = binDig === '0' ? '1' : '0';

  if (depth === bin.length - 1) {
    obj[binDig] = num;
    return pairObj[pair] !== undefined ? pairObj[pair] ^ num : pairObj[binDig] ^ num;
  }

  if (obj[binDig] === undefined) {
    obj[binDig] = {};
  }

  const pairNext = pairObj[pair] !== undefined ? pairObj[pair] : pairObj[binDig];

  return rec(bin, depth + 1, obj[binDig], pairNext, num);

};

const trie = nums => {

  const numsSorted = nums.sort((a,b) => b - a);
  const maxBin = numsSorted[0].toString(2);
  const maxBinLen = maxBin.length;
  let objNums = {};
  let max = 0;

  numsSorted.forEach(num => {

    let bin = num.toString(2);
    const binLen = bin.length;

    if (binLen < maxBinLen) {
      for (let i = 1; i <= maxBinLen - binLen; i++) {
        bin = '0' + bin;
      }
    }

    const maxLocal = rec(bin, 0, objNums, objNums, num);
    max = maxLocal > max ? maxLocal : max;

  });

  return max;

};

console.log(trie([2,13,8,12]));