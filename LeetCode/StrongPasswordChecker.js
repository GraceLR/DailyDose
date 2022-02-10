

const check = password => {

    let charCheckNum = 1;
    let charCheckLower = 1;
    let charCheckUpper = 1;
    const charCheckFn = () => charCheckNum + charCheckLower + charCheckUpper;
    

    let repeat = {};
    let temp = [];

    for(let i = 0; i < password.length; i++) {

        const ele = password[i];

        if(charCheckFn() > 0) {
            if(Number.isInteger(Number(ele))) {
                charCheckNum = 0;
            } else if(ele === ele.toLowerCase()) {
                charCheckLower = 0;
            } else if(ele === ele.toUpperCase()) {
                charCheckUpper = 0;
            }
        }

        if(temp.length !== 0 && ele === temp[temp.length - 1]) {
            temp.push(ele);
        } else {
            if(temp.length >= 3) {
                repeat[temp.length] = repeat[temp.length] === undefined ?
                1 : repeat[temp.length] + 1;
            }
            temp = [ele];
        }

    }

    let charCheck = charCheckFn();
    const len = password.length;

    if(len < 6) {

        const other = Math.max(repeatCheck, (6 - len));
        return Math.max(Math.max(charCheck), other);

    } else if (len > 20) {

        let steps = 0;
    
        const repeatKeys = () => Object.keys(repeat).sort((a, b) => b - a);

        while(charCheck > 0) {
            const repeatLets = repeatKeys();
            if(repeatLets.length > 0) {
                const longestRepeat = repeatLets[0];
                steps += 1;
                charCheck -= 1;
                repeat[longestRepeat] -= 1;
                if(repeat[longestRepeat] === 0) {
                    delete repeat[longestRepeat];
                }
                if(longestRepeat - 3 >= 3) {
                    repeat[longestRepeat - 3] = repeat[longestRepeat - 3] === undefined ?
                    1 : repeat[longestRepeat - 3] + 1;
                }
            } else {
                break;
            }
        }

        let lenDele = len - 20;
        while(lenDele > 0) {
            const repeatLets = repeatKeys();
            if(repeatLets.length > 0) {
                repeatLets.forEach(num => {
                    const residule = num % 3;
                    if(lenDele >= residule + 1) {
                        steps += residule + 1;
                        lenDele -= residule + 1;
                        repeat[num] -= 1;
                        if(repeat[num] === 0) {
                            delete repeat[num];
                        }
                        if(num - residule - 1 >= 3) {
                            repeat[num - residule - 1] = 
                            repeat[num - residule - 1] === undefined ? 
                            1 : repeat[num - residule - 1] + 1;
                        }
                        return;
                    }
                });
            } else {
                break;
            }
        }

        let repl = 0;
        repeatKeys().forEach(num => {
            repl += Math.floor(num / 3);
        });

        steps += charCheck + lenDele + repl;

        return steps;
        
    } else {
        return Math.max(repeat3Check, Math.max(charCheck(), repeat4Check));
    }

};

console.log(check("aaaabbbbccccddeeddeeddeedd"))




