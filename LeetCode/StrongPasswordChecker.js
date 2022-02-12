

const check = password => {

    let charCheckNum = 1;
    let charCheckLower = 1;
    let charCheckUpper = 1;
    const charCheckFn = () => charCheckNum + charCheckLower + charCheckUpper;
    

    let repeat = {};
    let temp = [password[0]];

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

        if(i > 0) {
            if(ele === temp[temp.length - 1]) {
                temp.push(ele);
                if( i === password.length - 1 && temp.length >= 3) {
                    repeat[temp.length] = repeat[temp.length] === undefined ? 1 : repeat[temp.length] + 1;
                }
            } else {
                if(temp.length >= 3) {
                    repeat[temp.length] = repeat[temp.length] === undefined ? 1 : repeat[temp.length] + 1;
                }
                temp = [ele];
            }
        }
    }

    let charCheck = charCheckFn();
    const len = password.length;
    const repeatKeys1 = (obj) => Object.keys(obj).sort((a, b) => b - a);
    const repeatKeys2 = (obj) => Object.keys(obj).sort((a, b) => a - b);

    if(len < 6) {

        const insert = Object.keys(repeat).length === 0 ? 0 : 1;
        return Math.max(Math.max(charCheck, insert), 6 - len);

    } else if (len > 20) {

        let steps = 0;

        while(charCheck > 0) {
            const repeatLets = repeatKeys1(repeat);
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

        const lenDele = len - 20;

        let stepTemp1 = 0;
        let lenDeleCopy1 = lenDele;
        let repeatCopy1 = {};      
        Object.keys(repeat).forEach((key) => repeatCopy1[key] = repeat[key]);
        let condition1 = true;

        let stepTemp2 = 0;
        let lenDeleCopy2 = lenDele;
        let repeatCopy2 = {};      
        Object.keys(repeat).forEach((key) => repeatCopy2[key] = repeat[key]);
        let condition2 = true;

        while(lenDeleCopy1 > 0 && condition1) {
            const repeatLets = repeatKeys1(repeatCopy1);
            if(repeatLets.length > 0) {
                for(let i = 0; i < repeatLets.length; i++) {
                    const num = repeatLets[i];
                    const residule = num % 3;
                    if(lenDeleCopy1 >= residule + 1) {
                        stepTemp1 += residule + 1;
                        lenDeleCopy1 -= residule + 1;
                        repeatCopy1[num] -= 1;
                        if(repeatCopy1[num] === 0) {
                            delete repeatCopy1[num];
                        }
                        if(num - residule - 1 >= 3) {
                            repeatCopy1[num - residule - 1] = 
                            repeatCopy1[num - residule - 1] === undefined ? 
                            1 : repeatCopy1[num - residule - 1] + 1;
                        }
                        break;
                    }
                    if(i === repeatLets.length - 1) {
                        condition1 = false;
                    }
                }                    
            } else {
                break;
            }
        }

        while(lenDeleCopy2 > 0 && condition2) {
            const repeatLets = repeatKeys2(repeatCopy2);
            if(repeatLets.length > 0) {
                for(let i = 0; i < repeatLets.length; i++) {
                    const num = repeatLets[i];
                    const residule = num % 3;
                    if(lenDeleCopy2 >= residule + 1) {
                        stepTemp2 += residule + 1;
                        lenDeleCopy2 -= residule + 1;
                        repeatCopy2[num] -= 1;
                        if(repeatCopy2[num] === 0) {
                            delete repeatCopy2[num];
                        }
                        if(num - residule - 1 >= 3) {
                            repeatCopy2[num - residule - 1] = 
                            repeatCopy2[num - residule - 1] === undefined ? 
                            1 : repeatCopy2[num - residule - 1] + 1;
                        }
                        break;
                    }
                    if(i === repeatLets.length - 1) {
                        condition2 = false;
                    }
                }                    
            } else {
                break;
            }
        }

        let repl1 = 0;
        repeatKeys1(repeatCopy1).forEach(num => {
            repl1 += (Math.floor(Number(num) / 3)) * repeatCopy1[num];
        });

        let repl2 = 0;
        repeatKeys2(repeatCopy2).forEach(num => {
            repl2 += (Math.floor(Number(num) / 3)) * repeatCopy2[num];
        });

        steps += charCheck + Math.min(
            (lenDeleCopy1 + repl1 + stepTemp1), (lenDeleCopy2 + repl2 + stepTemp2)
            );

        return steps;

    } else {

        let repl = 0;
        repeatKeys1(repeat).forEach(num => {
            repl += (Math.floor(num / 3)) * repeat[num];
        });
        return Math.max(charCheck, repl);

    }

};

console.log(check("aaaaAAAAAA00123456"))



