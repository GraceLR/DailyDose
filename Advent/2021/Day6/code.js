
const { testList, realList, Day } = require("./input");

const sum = arr => {
  let sum = 0;
  arr.forEach(ele => sum += ele);
  return sum;
};

const day6Part2 = (list, day) => {
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  list.forEach(ele => {
    array[ele] += 1;
  });
  for(let i = 1; i <= day; i++) {
      const temp = array[0];
      for(let j = 1; j < array.length; j++) {
        array[j - 1] = array[j];
      }
      array[8] = temp;
      array[6] += temp;
  }
  return sum(array);
};

console.log(day6Part2(testList, Day));
console.log(day6Part2(realList, Day));


