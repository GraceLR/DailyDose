
const { testInput, realInput } = require("./input");

// const location = (input) => {
//     let horizontal = 0;
//     let depth = 0;
//     input.forEach(move => {
//         if(move[0] === 'f') {
//             horizontal += Number(move[8]);
//         } else if(move[0] === 'u') {
//             depth -= Number(move[3]);
//         } else if(move[0] === 'd') {
//             depth += Number(move[5]);
//         }
//     })
//     return horizontal * depth;
// }
// console.log(location(testInput));
// console.log(location(realInput));

const locationPart2 = (input) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  input.forEach(move => {
    if (move[0] === 'f') {
      horizontal += Number(move[8]);
      depth += Number(move[8]) * aim;
    } else if (move[0] === 'u') {
      aim -= Number(move[3]);
    } else if (move[0] === 'd') {
      aim += Number(move[5]);
    }
  });
  return horizontal * depth;
};
console.log(locationPart2(testInput));
console.log(locationPart2(realInput));