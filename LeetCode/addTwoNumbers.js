

const nodes = input => {

    let obj = {};
    let next = obj;
    const len = input.length;

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

    const obj1 = nodes(l1);
    const obj2 = nodes(l2);
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
    
        res.push((Number(key1) + Number(key2) + carry) % 10)
    
        return Math.floor((Number(key1) + Number(key2) + carry) / 10);
    
    };

    rec(obj1, obj2);

    return res;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));