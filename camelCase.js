

const camelCase = function(input) {
    let copy = '';
    for (var i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            copy += input[i + 1].toUpperCase();
            input = input.replace(input[i + 1], '');
        } else {
            copy += input[i];
        }
    }
    return copy;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));