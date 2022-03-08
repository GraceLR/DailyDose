
const { test, real } = require("./input");

// const sum = arr => {
//   let sum = 0;
//   arr.forEach(ele => sum += ele);
//   return sum;
// };

// const day8Part1 = input => {
//   let res = 0;
//   input.forEach(str => {
//     let count = 0;
//     for(let i = str.length - 1; i >= 0; i--) {
//       if(str[i] === '|') {
//         break;
//       }
//       if(str[i] !== ' ') {
//         count += 1;
//       } else {
//         res = (
//           count === 2 || count === 3 || count === 4 || count === 7 ?
//           res += 1 : res
//         );
//         count = 0;
//       }
//     }
//   });
//   return res;
// };

// console.log(day8Part1(test));
// console.log(day8Part1(real));


const objFunc = str => {
  let obj = {};
  let count = 0;
  let string = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '|') {
      break;
    }
    if(str[i] === ' ') {
      if(obj[count] === undefined) {
        obj[count] = [string];
      } else {
        obj[count].push(string);
      }
      string = '';
      count = 0;
    } else {
      string += str[i];
      count += 1;
    }
  }
  return obj;
};

const rD = str => {
  let res = '';
  str.split('').forEach(l => {
    let cond = true;
    for(let i = 0; i < res.length; i++) {
      cond = l === res[i] ? cond && false : cond && true;
    }
    if(cond === true) {
      res += l;
    }
  });
  return res;
}


const rel = (...args) => {

  let ins = '';
  let nIns = '';
  let obj = {};

  args.forEach(str => {
    obj[str] = {};
    str.split('').forEach(l => obj[str][l] = true);
  });

  for(let i = 0; i < args.length; i++) {
    args[i].split('').forEach(l => {
      let count = 0;
      for(let j = 0; j < args.length; j++) {
        if(i !== j && obj[args[j]][l] === undefined) {
          nIns += l;
          break;
        }
        if(i === 0 && i !== j && obj[args[j]][l] !== undefined) {
          count += 1;
        }
      }
      if(count === args.length - 1) {
        ins += l;
      }
    });
  }
  ins = ins === '' ? undefined : rD(ins);
  nIns = nIns === '' ? undefined : rD(nIns);
  return { ins, nIns };
}

// console.log(rel('abc','cde','efg'))

const flip = str => {
  let res = '';
  for(let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}


const day8Part2 = input => {
  sum = 0;
  input.forEach(str => {
    let pos = [0, 1, 2, 3, 4, 5, 6];
    const obj = objFunc(str);
    pos[0] = rel(obj['2'][0], obj['3'][0]).nIns;
    const twoThreeFour = rel(obj['6'][0], obj['6'][1], obj['6'][2]).nIns;
    pos[2] = rel(obj['2'][0], twoThreeFour).ins;
    let number6;
    obj['6'].forEach(str => {
      if(rel(str, pos[2]).ins === undefined) {
        number6 = str;
      }
    });
    let number5;
    obj['5'].forEach(str => {
      if(rel(str, pos[2]).ins === undefined) {
        number5 = str;
      }
    });
    pos[4] = rel(number5, number6).nIns;
    
    let letters = '';
    let number = '';
    for(let i = str.length - 1; i >= 0; i--) {
      if(str[i] === '|') {
        sum += Number(flip(number));
        break;
      }
      if(str[i] === ' ') {
        if(letters.length === 2) {
          number += 1;
        }
        if(letters.length === 3) {
          number += 7;
        }
        if(letters.length === 4) {
          number += 4;
        }
        if(letters.length === 7) {
          number += 8;
        }
        if(letters.length === 5) {
          if(rel(letters, pos[2]).ins === undefined) {
            number += 5;
          } else if(rel(letters, pos[4]).ins === pos[4]) {
            number += 2;
          } else {
            number += 3;
          }
        }
        if(letters.length === 6) {
          if(rel(letters, pos[2]).ins === undefined) {
            number += 6;
          } else if(rel(letters, pos[4]).ins === undefined) {
            number += 9;
          } else {
            number += 0;
          }
        }
        letters = '';
      } else {
        letters += str[i];
      }
    }
  });
  return sum;
}


console.log(day8Part2(test));
console.log(day8Part2(real));


