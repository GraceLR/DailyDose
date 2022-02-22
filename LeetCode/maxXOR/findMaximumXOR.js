
// const binToObj = bin => {
//   let obj = { 0: {}, 1: {} };
//   bin.split('').forEach((ele, i) => {
//     obj[ele][i] = true;
//   });
//   return obj;
// };

// a. find 0, 1
// b. maxXOR

const fnXOR = (num, arr) => {

  let max = 0;

  arr.forEach(ele => {
    const XOR = ele ^ num; 
    max = XOR > max ? XOR : max;
  });
  return max;
};

const findMaximumXOR = nums => {

  const numsLen = nums.length;

  if (numsLen === 1) {
    return 0;
  }

  const numsSorted = nums.sort((a, b) => b - a);

  const maxNumBin = numsSorted[0].toString(2);
  const maxNumBinLen = maxNumBin.length;
  let groupBin = [[maxNumBin]];
  let numsLenCheck = 1;

  for(let i = 1; i < numsLen; i++) {
    const num = numsSorted[i];
    const bin = num.toString(2);
    const binLen = bin.length;
    if(binLen < maxNumBinLen) {
      break;
    }
    groupBin[0].push(bin);
    numsLenCheck ++;
  }

  const groupBinLen = () => groupBin.length;
  let pos = groupBin[0].length;
  let maxXOR = 0;

  // numsLenCheck === numsLen?

  groupBin[0].forEach((bin, maxInd) => {

    let cond = true;

    for(let i = 1; i < maxNumBinLen; i++) {

      const ele = bin[i];

      if(ele === '0') {

        if(groupBinLen() <= i) {
          for(let j = pos; j < numsLen; j++) {
            const num = numsSorted[j];
            const bin = num.toString(2);
            const group = maxNumBinLen - bin.length;
            if(group > i) {
              break;
            }
            if(groupBin[group] === undefined) {
              groupBin[group] = [];
            }
            groupBin[group].push(num);
            numsLenCheck ++;
          }
        }

        if(groupBin[i] !== undefined) {
          cond = false;
          const XOR = fnXOR(numsSorted[maxInd], groupBin[i]);
          maxXOR = XOR > maxXOR ? XOR : maxXOR;

        }

      }

      if(i === maxNumBinLen - 1 && cond) {
        // pair up with last group
        let lastGroup;
        if(numsLenCheck < numsLen) {
          const minNum = numsSorted[numsLen - 1];
          lastGroup = [minNum];
          for(let i = numsLen - 2; i >= 0; i--) {
            const num = numsSorted[i];
            const bin = num.toString(2);
            const binLen = bin.length;
            if(binLen > minNum.toString(2).length) {
              break;
            }
            lastGroup.push(num);
          }
        } else {
          lastGroup = groupBin[groupBinLen() - 1];
        }

        const XOR = fnXOR(numsSorted[maxInd], lastGroup);
        maxXOR = XOR > maxXOR ? XOR : maxXOR;

      }

    }
  });

  return maxXOR;

};


console.log(findMaximumXOR([3,10,5,25,2,8]))
