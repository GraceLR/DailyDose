
const { testList, realList, Day } = require("./input");

const day6Part1 = (list, day) => {
  const res = [list];
  for(let i = 1; i <= day; i++) {
    const newOne = [];
    let nextDay = [];
    res[i - 1].forEach(ele => {
      if(ele === 0) {
        nextDay.push(6);
        newOne.push(8);
      } else {
        nextDay.push(ele - 1);
      }
    });
    nextDay = nextDay.concat(newOne);
    res.push(nextDay);
  }
  return res[day].length;
};

console.log(day6Part1(testList, Day));
console.log(day6Part1(realList, Day));
