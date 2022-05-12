
const letterCombinations = digits => {

    const obj = {

        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']

    };

    const init = obj[digits[0]];
    let res = init ? init : [];

    for (let i = 1; i < digits.length; i++) {

        const previous = res;
        res = [];
        const next = obj[digits[i]];

        if (next) {

            if (previous.length > 0) {

                previous.forEach(ele => {

                    next.forEach(char => {
        
                        res.push(ele + char);
        
                    });
        
                });

            } else {

                next.forEach(char => {
        
                    res.push(char);
    
                });

            }

        } else {

            res = previous;

        }

    }

    return res;

};

console.log(letterCombinations("231"));