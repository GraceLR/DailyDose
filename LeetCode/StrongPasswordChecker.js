

const check = password => {

    let charCheckNum = 1;
    let charCheckLower = 1;
    let charCheckUpper = 1;
    const charCheck = () => charCheckNum + charCheckLower + charCheckUpper;

    let repeat3Check = 0;
    let repeat4Check = 0;
    let temp = [];

    for(let i = 0; i < password.length; i++) {

        const ele = password[i];

        if(charCheck() > 0) {
            if(Number.isInteger(Number(ele))) {
                charCheckNum = 0;
            } else if(ele === ele.toLowerCase()) {
                charCheckLower = 0;
            } else if(ele === ele.toUpperCase()) {
                charCheckUpper = 0;
            }
        }

        if(temp.length !== 0 && ele === temp[temp.length - 1]) {
            if(temp.length === 2) {
                if(ele !== password[i + 1]) {
                    repeat3Check += 1;
                } else {
                    repeat4Check += 1;
                }
                temp = [];
            } else {
                temp.push(ele);
            }
        } else {
            temp = [ele];
        }

    }

    const len = password.length;

    if(len < 6) {

        const other = Math.max(repeat3Check, (6 - len));
        return Math.max(Math.max(charCheck(), repeat4Check), other);
    } else if (len > 20) {

        const other = Math.max(charCheck(), repeat4Check) + (len - 20);
        return Math.max(repeat3Check, other);
    } else {
        return Math.max(repeat3Check, Math.max(charCheck(), repeat4Check));
    }

};

console.log(check("1111111111"))
