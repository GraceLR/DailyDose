const romanToInt = s => {
    const rule = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        const rl = s[i];
        if (i < s.length - 1) {
            const rlNext = s[i + 1];
            if (rl === 'C' && rlNext === 'M') {
                int += 900;
                i++;
            } else if (rl === 'C' && rlNext === 'D') {
                int += 400;
                i++;
            } else if (rl === 'X' && rlNext === 'C') {
                int += 90;
                i++;
            } else if (rl === 'X' && rlNext === 'L') {
                int += 40;
                i++;
            } else if (rl === 'I' && rlNext === 'X') {
                int += 9;
                i++;
            } else if (rl === 'I' && rlNext === 'V') {
                int += 4;
                i++;
            } else {
                int += rule[rl];
            }
        } else {
            int += rule[rl];
        }
    }
    return int;
};