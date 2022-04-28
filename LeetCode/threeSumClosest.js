
const threeSumClosest = (nums, target) => {

  const numsSorted = nums.sort((a, b) => a - b);
  const len = nums.length;
  let dis = Number.MAX_VALUE;
  let res = 0;

  for (let i = 0; i < len; i++) {

    const num1 = numsSorted[i];

    for (let j = i + 1; j < len; j++) {

      const num2 = numsSorted[j];
      let disLocal = Number.MAX_VALUE;

      for (let k = j + 1; k < len; k++) {

        const num3 = numsSorted[k];
        const sum = num1 + num2 + num3;
        const curDis = Math.abs(sum - target);

        if (curDis <= disLocal) {

          disLocal = curDis;

          if (curDis < dis) {

            dis = curDis;
            res = sum;

          }

        } else {

          break;

        }


      }

    }

  }

  return res;
    
};

console.log(threeSumClosest([0,0,0], 1));