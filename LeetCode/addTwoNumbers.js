

const nodes = (input, zeroNum) => {

    let obj = {};
    let next = obj;
    const len = input.length;

    for (let i = 0; i < zeroNum; i++) {

        next[0] = {};
        next = next[0];

    }

    for (let i = 0; i < len; i++) {

        const ele = input[i];

        if (i === len - 1) {

            next[ele] = null;

        } else {

            next[ele] = {};
            next = next[ele];
        }

    }

    return obj;

};

const addTwoNumbers = (l1, l2) => {

    const l1Len = l1.length;
    const l2Len = l2.length;
    const len = Math.max(l1Len, l2Len);
    const obj1 = nodes(l1, len - l1Len);
    const obj2 = nodes(l2, len - l2Len);
    const res = [];

    const rec = (next1, next2) => {

        const key1 = Object.keys(next1);
        next1 = next1[key1];
        const key2 = Object.keys(next2);
        next2 = next2[key2];
    
        if (!next1 && !next2) {
    
            res.push((Number(key1) + Number(key2)) % 10);
            
            return Math.floor((Number(key1) + Number(key2)) / 10);
    
        }
    
        const carry = rec(next1, next2);
    
        res.push((Number(key1) + Number(key2) + carry) % 10);
    
        return Math.floor((Number(key1) + Number(key2) + carry) / 10);
    
    };

    const carry = rec(obj1, obj2);

    if (carry === 1) {

        res.push(1);
        
    }

    return res;
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));