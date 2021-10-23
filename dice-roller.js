
const num = process.argv[2];
const diceRoll = function (num) {
    let array = [];
    for (let i  = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * 6) + 1);
    }
     console.log(`Rolled ${num} dice: ${array.join(', ')}`);
}

diceRoll(num);