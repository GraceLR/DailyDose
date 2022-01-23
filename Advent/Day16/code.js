
const { test, real } = require("./input");

const codeRule1 = {
  0: '0000',
  1: '0001',
  2: '0010',
  3: '0011',
  4: '0100',
  5: '0101',
  6: '0110',
  7: '0111',
  8: '1000',
  9: '1001',
  A: '1010',
  B: '1011',
  C: '1100',
  D: '1101',
  E: '1110',
  F: '1111'
};

const bintoNum = binStr => {
  let num = 0;
  for(let i = binStr.length - 1; i >= 0; i--) {
    if(binStr[i] === '1') {
      num += 2 ** (binStr.length - 1 - i);
    }
  }
  return num;
}; 

const inputTrans = input => {
  let inputTrans = '';
  input.split('').forEach(ele => {
    inputTrans += codeRule1[ele];
  });
  return inputTrans;
};

// const allZero = input => {
//   for(let i = 0; i < input.length; i++) {
//     if(input[i] === '1') {
//       return false;
//     }
//   }
//   return true;
// };

const day16Part2 = (inputTrans) => {

  let res = {
    bin: inputTrans.substring(0, 6),
    num: undefined
  };

  const typeID = inputTrans.substring(3, 6);

  if(typeID === '100') {
    let binNum = '';
    let i = 1;
    while((i * 5) + 1 < inputTrans.length) {
      res.bin += inputTrans.substr((i * 5) + 1, 5);
      binNum += inputTrans.substr((i * 5) + 2, 4);
      if(inputTrans[(i * 5) + 1] === '0') {
        res.num = bintoNum(binNum);
        break;
      }
      i += 1;
    }
    return res;
  } else {

    const lengthTypeID = inputTrans[6];
    res.bin += lengthTypeID;

    if(lengthTypeID === '0') {
      const binLenSubPacs = bintoNum(inputTrans.substring(7, 22));
      res.bin += inputTrans.substring(7, 22);
      let binSubPacs = inputTrans.substring(22);
      let len = 0;
      while(len < binLenSubPacs) {
        const rt = day16Part2(binSubPacs);
        const subBinLen = rt['bin'].length;
        len += subBinLen;
        binSubPacs = binSubPacs.substring(subBinLen);
        res.bin += rt.bin;

        if(typeID === '000') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num += rt.num;
          }
        }
        if(typeID === '001') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num * rt.num;
          }
        }
        if(typeID === '010') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = Math.min(res.num, rt.num);
          }
        }
        if(typeID === '011') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = Math.max(res.num, rt.num);
          }
        }
        if(typeID === '101') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num > rt.num ? 1 : 0;
          }
        }
        if(typeID === '110') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num < rt.num ? 1 : 0;
          }
        }
        if(typeID === '111') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num === rt.num ? 1 : 0;
          }
        }

      }
      return res;
    }
    if(lengthTypeID === '1') {
      const binCtSubPacs = bintoNum(inputTrans.substring(7, 18));
      res.bin += inputTrans.substring(7, 18);
      let binSubPacs = inputTrans.substring(18);
      let ct = 0;
      while(ct < binCtSubPacs) {
        ct += 1;
        const rt = day16Part2(binSubPacs);
        binSubPacs = binSubPacs.substring(rt['bin'].length);
        res.bin += rt.bin;
        if(typeID === '000') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num += rt.num;
          }
        }
        if(typeID === '001') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num * rt.num;
          }
        }
        if(typeID === '010') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = Math.min(res.num, rt.num);
          }
        }
        if(typeID === '011') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = Math.max(res.num, rt.num);
          }
        }
        if(typeID === '101') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num > rt.num ? 1 : 0;
          }
        }
        if(typeID === '110') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num < rt.num ? 1 : 0;
          }
        }
        if(typeID === '111') {
          if(res.num === undefined) {
            res.num = rt.num;
          } else {
            res.num = res.num === rt.num ? 1 : 0;
          }
        }

      }
      return res;
    }
  }
};


console.log(day16Part2(inputTrans(real)));