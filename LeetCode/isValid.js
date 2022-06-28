const isValid = s => {
    const rule = {
        '(': 'open',
        '{': 'open',
        '[': 'open',
        ')': '(',
        '}': '{',
        ']': '['
    };
    const arr = [];
    for (const p of s) {
        const pRule = rule[p];
        const last = arr[arr.length - 1];
        if (pRule === 'open') {
            arr.push(p);
        } else if (last && last === pRule) {
            arr.pop();
        } else {
            return false;
        }
    }
    return arr.length === 0 ? true : false;
};

console.log(isValid("()[]{}"))