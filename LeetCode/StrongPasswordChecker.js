

const check = password => {

    let charCheck = 3;

    let repeatCheck = 0;
    let temp = [];

    for(let i = 0; i < password.length; i++) {

        const ele = password[i];

        if(Number.isInteger(Number(ele))) {
            charCheck -= 1;
        } else if(ele === ele.toLowerCase()) {
            charCheck -= 1;
        } else if(ele === ele.toUpperCase()) {
            charCheck -= 1;
        }

        if(temp.length !== 0 && ele === temp[temp.length - 1]) {
            if(temp.length === 2) {
                repeatCheck += 1;
                temp = [];
            } else {
                temp.push(ele);
            }
        } else {
            temp = [ele];
        }

    }

    charCheck = charCheck < 0 ? 0 : charCheck;

    const len = password.length;

    if(len < 6) {
        const other = repeatCheck + (6 - len);
        return Math.max(charCheck, other);
    } else if (len > 20) {
        const other = charCheck + (20 - len);
        return Math.max(repeatCheck, other);
    } else {
        return Math.max(repeatCheck, charCheck);
    }
    
};

check('1337C0d3')
