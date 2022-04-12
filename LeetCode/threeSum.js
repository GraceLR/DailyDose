
const threeSum = nums => {

  const numsSorted = nums.sort((a, b) => a - b);

  let obj = {};

  for (let i = 0; i < nums.length; i++) {

    obj[numsSorted[i]] = i;

  }

  let res = [];

  for (let i = 0; i < nums.length; i++) {

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

console.log(threeSum([0]));