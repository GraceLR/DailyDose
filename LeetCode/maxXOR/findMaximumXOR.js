
const startTime = performance.now()

let bigcount = 0;

const fnXOR = (num, arr) => {

  let max = 0;

  arr.forEach(ele => {
    const XOR = ele ^ num; 
    max = XOR > max ? XOR : max;
  });
  return max;
};

const lengthMap = new Map();

const getOrCalcBinLength = num => {
  let ret = lengthMap.get(num);
  if (ret === undefined) {
    let len = 0;
    for(let i = 1; i <= num; i *= 2) {
      len++;
    }

    ret = len;
    lengthMap.set(num, len);
  }
  else {
    //bigcount++;
  }

  return ret;
}

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

  if(numsLenCheck === numsLen) {
    numsSorted.forEach((num, ind) => {
      for(let j = ind + 1; j < numsLen; j++) {
        const XOR = num ^ numsSorted[j];
        maxXOR = XOR > maxXOR ? XOR : maxXOR;
      }
    });
    return maxXOR;
  }

  groupBin[0].forEach((bin, maxInd) => {

    let cond = true;

    for(let i = 1; i < maxNumBinLen; i++) {

      const ele = bin[i];

      if(ele === '0') {

        if(groupBinLen() <= i) {
          for(let j = pos; j < numsLen; j++) {
            const num = numsSorted[j];
            const group = maxNumBinLen - getOrCalcBinLength(num);
            if(group > i) {
                pos = j - 1;
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
            const binLen = getOrCalcBinLength(num);
            if(binLen > getOrCalcBinLength(minNum)) {
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

console.log(findMaximumXOR(

  const endTime = performance.now()

  console.log(endTime - startTime)

  console.log(bigcount);
