const { testInput, realInput } = require("./input");

// const countIncrease = (input) => {
//     let count = 0;
//     for(let i = 1; i < input.length; i++) {
//         if(input[i] > input[i - 1]) {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(countIncrease(testInput));
// console.log(countIncrease(realInput));

const partTwo = (input) => {
    let count = 0;
    for(let i = 3; i < input.length; i++) {
        if(input[i] > input[i - 3]) {
            count += 1;
        }
    }
    return count;
}

console.log(partTwo(testInput));
console.log(partTwo(realInput));