
var originalDigits = s => {

    const ruleObj = {
        e: { 'zero': 1, 'one': 1, 'three': 2, 'five': 1, 'seven': 2, 'eight': 1, 'nine': 1 },
        f: { 'four': 1, 'five': 1 },
        g: { 'eight': 1 },
        h: { 'three': 1, 'eight': 1 },
        i: { 'five': 1, 'six': 1, 'eight': 1, 'nine': 1 },
        n: { 'one': 1, 'seven': 1, 'nine': 2 },
        o: { 'zero': 1, 'one': 1, 'two': 1, 'four': 1 },
        r: { 'zero': 1, 'three': 1, 'four': 1 },
        s: { 'six': 1, 'seven': 1 },
        t: { 'two': 1, 'three': 1, 'eight': 1 },
        u: { 'four': 1 },
        v: { 'five': 1, 'seven': 1 },
        w: { 'two': 1 },
        x: { 'six': 1 },
        z: { 'zero': 1 }
    };

    const numObj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };

    let sObj = {};
    s.split('').forEach(ele => {
        sObj[ele] = sObj[ele] === undefined ? 1 : sObj[ele] + 1;
    });

    let res = [];

    for(let l in sObj) {
        while(sObj[l] > 0) {
            const numOptions = Object.keys(ruleObj[l]);
            if(numOptions.length === 1) {
                res.push(numObj(numOptions[0]));
                numOptions[0].split('').forEach(ele => {
                    sObj[ele] -= ruleObj[ele][numOptions[0]];
                });
            } else {
                numOptions.forEach(numLet => {
                    let cond = true;
                    for(let i = 0; i < numLet.length; i++) {
                        const ele = numLet[i];
                        if(sObj[ele] === undefined || sObj[ele] < ruleObj[ele][numLet]) {
                            cond = false;
                            break;
                        }
                    }
                    if(cond) {
                        res.push(numObj[numLet]);
                        numLet.split('').forEach(ele => {
                            sObj[ele] -= ruleObj[ele][numLet];
                        });
                    }

                });
            }
        }

    }

    return res.sort().join('');
};

console.log(originalDigits('fviefuro'))