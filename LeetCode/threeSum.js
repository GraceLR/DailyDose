

// const threeSum = nums => {

//   const numsSorted = nums.sort((a, b) => a - b);
//   const len = nums.length;

//   let obj = {};

//   for (let i = 0; i < len; i++) {

//     obj[numsSorted[i]] = i;

//   }

//   let res = [];

//   for (let i = 0; i < len; i++) {

//     if (numsSorted[i] > 0) {

//         break;

//     }

//     while (i > 0 && numsSorted[i] === numsSorted[i - 1]) {

//       i++;

//     }

//     const numi = numsSorted[i];

//     for (let j = i + 1; j < len; j++) {

//       while (j > i + 1 && numsSorted[j] === numsSorted[j - 1]) {

//         j++;
    
//       }

//       const numj = numsSorted[j];
//       const rem = 0 - (numi + numj);
//       const pos = obj[rem];

//       if (pos !== undefined && pos > j) {

//         res.push([numi, numj, rem]);

//       }

//     }

//   }

//   return res;

// };


// twoSum on after i

// const threeSum = nums => {

//   const numsSorted = nums.sort((a, b) => a - b);
//   let res = [];
//   const len = numsSorted.length;

//   for (let i = 0; i < len; i++) {

//     if (numsSorted[i] > 0) {

//       break;

//     }

//     while (i > 0 && numsSorted[i] === numsSorted[i - 1]) {

//     //   if (i === len - 1) {

//     //     return res;

//     //   }

//       i++;

//     }

//     const num = numsSorted[i];
//     const rem = -num;
//     let left = i + 1;
//     let right = len - 1;
        
//     while (left < right) {

//       const sum = numsSorted[left] + numsSorted[right];

//       if (sum > rem) {

//         right--;

//       } else if (sum < rem) {

//         left++;

//       } else {

//         res.push([num, numsSorted[left], numsSorted[right]]);
//         left++;

//         while (numsSorted[left] === numsSorted[left - 1]) {

//           left++;

//         }

//       }

//     }

//   }

//   return res;

// };

console.log(threeSum([-1,0,1,2,-1,-4]));
