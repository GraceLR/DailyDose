
var originalDigits = s => {

    const numArr = 
    [
        { z: 1, e: 1, r: 1, o: 1},
        { o: 1, n: 1, e: 1 },
        { t: 1, w: 1, o: 1 },
        { t: 1, h: 1, r: 1, e: 2 },
        { f: 1, o: 1, u: 1, r: 1 },
        { f: 1, i: 1, v: 1, e: 1 },
        { s: 1, i: 1, x: 1 },
        { s: 1, e: 2, v: 1, n: 1 },
        { e: 1, i: 1, g: 1, h: 1, t: 1 },
        { n: 2, i: 1, e: 1 }
    ];

    let sObj = {};
    s.split('').forEach(ele => {
        sObj[ele] = sObj[ele] === undefined ? 1 : sObj[ele] + 1;
    });

    let res = '';

    for(let i = 0; i < 10; i++) {
        const num = numArr[i];
        const letterArr = Object.keys(num);
        let cond = true;
        for(let j = 0; j < letterArr.length; j++) {
            const l = letterArr[j];
            if(sObj[l] === undefined || sObj[l] < num[l]) {
                cond = false;
                break;
            }
        }
        if(cond) {
            res += i;
            letterArr.forEach(l => {
                sObj[l] -= num[l];
                if(sObj[l] === 0) {
                    delete sObj[l];
                }
            });
        }
        if(Object.keys(sObj).length === 0) {
            break;
        }
    }

    return res;
};

console.log(originalDigits("zeroonetwothreefourfivesix"))