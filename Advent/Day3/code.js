
const { testInput, realInput } = require("./input");

// const powerConsumption = (input) => {
//     const gamma = input[0].split('').map((_num, i) => {
//         let zero = 0;
//         let one = 0;
//         input.map(str => {
//             if(str[i] === '0') {
//                 zero += 1;
//             } else if(str[i] === '1') {
//                 one += 1;
//             }
//         });
//         return zero > one ? 0 : 1;
//     });
//     const epsilon = gamma.map(num => num === 0 ? 1: 0);
//     return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
// };

// console.log(powerConsumption(testInput));
// console.log(powerConsumption(realInput));


const filter = (key, index, array) => {
    const resArray = [];
    array.forEach(char => {
        if(char[index] === key) {
            resArray.push(char);
        }
    })
    return resArray;
};

const partTwoOxygen = (input, i) => {

    if(input.length === 1) {
        return parseInt(input[0], 2);
    }

    let zero = 0;
    let one = 0;
    let oxygen;
    input.forEach(str => {
        if(str[i] === '0') {
            zero += 1;
        } else if(str[i] === '1') {
            one += 1;
        }
    })
    if(zero > one) {
        oxygen = filter('0', i, input);
        // const co2 = filter('1', i, input);
    } else {
        oxygen = filter('1', i, input);
        // const co2 = filter('0', i, input);
    }
    return partTwoOxygen(oxygen, i + 1);
};

const partTwoCo2 = (input, i) => {

    if(input.length === 1) {
        return parseInt(input[0], 2);
    }

    let zero = 0;
    let one = 0;
    // let oxygen;
    let co2;
    input.forEach(str => {
        if(str[i] === '0') {
            zero += 1;
        } else if(str[i] === '1') {
            one += 1;
        }
    })
    if(zero > one) {
        // oxygen = filter('0', i, input);
        co2 = filter('1', i, input);
    } else {
        // oxygen = filter('1', i, input);
        co2 = filter('0', i, input);
    }
    return partTwoCo2(co2, i + 1);
};

console.log(partTwoOxygen(testInput, 0) * partTwoCo2(testInput, 0));
console.log(partTwoOxygen(realInput, 0) * partTwoCo2(realInput, 0));