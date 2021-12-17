
const countIncrease = (input) => {
    let count = 0;
    for(let i = 1; i < input.length; i++) {
        if(input[i] > input[i - 1]) {
            count += 1;
        }
    }
    return count;
}

const location = (input) => {
    let horizontal = 0;
    let depth = 0;
    input.forEach(move => {
        if(move[0] === 'f') {
            horizontal += 1;
        } else if(move[0] === 'u') {
            depth -= 1;
        } else if(move[0] === 'd') {
            depth += 1;
        }
    })
    return horizontal * depth;
}

const powerConsumption = (input) => {
    let zero = 0;
    let one = 0;
    const gamma = input[0].split('').map((_num, i) => {
        input.map(str => {
            if(str[i] === 0) {
                zero += 1;
            } else if(str[i] === 1) {
                one += 1;
            }
        });
        return zero > one ? 0 : 1;
    });
    const epsilon = gamma.map(num => num === 0 ? 1: 0);
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
} 