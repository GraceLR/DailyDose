

const myAtoi = s => {

    const obj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

    let sLen = s.length;
    let maxInt = (2 ** 31) - 1;
    let maxIntModu = maxInt % 10;
    let res = undefined;
    let sign = { cond: undefined, value: 1};
    let i = 0;

    while (i < sLen) {

        const char = s[i];
        const charValue = obj[char];

        if (!res) {
 
            if (char === '-' && !sign['cond']) {

                sign['value'] = -1;
                sign['cond'] = true;
                maxInt = 2 ** 31;
                maxIntModu = maxInt % 10;

            } else if (charValue) {

                res = charValue;

            } else if (char !== ' ' && sign['cond']) {

                return 0;

            }

        } else {

            if (charValue === undefined) {

                return res * sign['value'];

            } else {

                if (res > maxInt / 10 ||
                    (res >= (maxInt - maxIntModu) / 10 &&
                    charValue >= maxIntModu + 1)) {
        
                return maxInt * sign['value'] ;
        
                }
             
                res = res * 10 + charValue;

            }

        }

        i++;

    }

    return res * sign['value'];

};

console.log(myAtoi(' -+ 120'))