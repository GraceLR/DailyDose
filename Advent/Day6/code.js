
const { testList, realList, Day } = require("./input");

const day6Part1 = (list, day) => {
  let pre = list;
  for(let i = 1; i <= day; i++) {
    let nextDay = [];
    pre.forEach(ele => {
      if(ele === 0) {
        nextDay.push(6);
        nextDay.push(8);
      } else {
        nextDay.push(ele - 1);
      }
    });
    pre = nextDay;
  }
  return pre.length;
};

console.log(day6Part1(testList, Day));
// console.log(day6Part1(realList, Day));


