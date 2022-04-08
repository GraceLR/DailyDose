

const myAtoi = s => {

    const obj = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

    let sLen = s.length;
    const maxInt = (2 ** 31) - 1;
    const maxIntModu = maxInt % 10;
    let res = undefined;
    let sign = 1;
    let i = 0;

    while (i < sLen) {

        const char = s[i];
        const charValue = obj[char];

        if (!res) {
 
            if (char === '-') {

                sign = -1;

            } else if (charValue) {

                res = charValue;

            }

        } else {

            if (!charValue) {

                return res * sign;

            } else {

                if (res > maxInt / 10 ||
                    (res >= (maxInt - maxIntModu) / 10 &&
                    charValue >= maxIntModu + 1)) {
        
                return ((2 ** 31) - 1) * sign ;
        
                }
             
                res = res * 10 + charValue;

            }

        }

        i++;

    }

    return res * sign;
};

console.log(myAtoi('    -123123719823791827391827391827182371232  asda3sd'))