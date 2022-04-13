
const threeSum = nums => {

  const numsSorted = nums.sort((a, b) => a - b);

  let obj = {};

  for (let i = 0; i < nums.length; i++) {

    obj[numsSorted[i]] = i;

  }

  let res = [];

  for (let i = 0; i < nums.length; i++) {

    if (numsSorted[i] > 0) {

        break;

    }

    while (i > 0 && numsSorted[i] === numsSorted[i - 1]) {

      i++;

    }

    const numi = numsSorted[i];

    for (let j = i + 1; j < nums.length; j++) {

      while (j > i + 1 && numsSorted[j] === numsSorted[j - 1]) {

        j++;
    
      }

      const numj = numsSorted[j];
      const rem = 0 - (numi + numj);
      const pos = obj[rem];

      if (pos !== undefined && pos > j) {

        res.push([numi, numj, rem]);

      }

    }

  }

  return res;

};


// twoSum on after i

// const threeSum = nums => {

//     const numsSorted = nums.sort((a, b) => a - b);

//     const twoSum = (pos, rem) => {

//         let obj = {};
//         let res = [];

//         for (let i = pos; i < numsSorted.length; i++) {

//             const num = numsSorted[i];
//             const num2 = rem - num; 

//             if (obj[num2] && !obj[num]) {
    
//                 res.push([num2, num]);

//             }

//             obj[num] = i;

//         }

//         return res;

//     };

//     let res = [];
//     const len = numsSorted.length;

//     for (let i = 0; i < len; i++) {

//         while (i > 0 && numsSorted[i] === numsSorted[i - 1]) {

//             i++;

//             if (i === len) {

//                 return res;

//             }

//         }

//         const num = numsSorted[i];
//         const twoSumRes = twoSum(i + 1, -num);
//         const twoSumResLen = twoSumRes.length;

//         if (twoSumResLen > 0) {

//           twoSumRes.forEach(arr => {

//             arr.push(num);
//             res.push(arr);

//           });

//         }

//     }

//     return res;

// };

console.log(threeSum([0,0,0,0]));