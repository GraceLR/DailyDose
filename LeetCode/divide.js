const absolute = num => num >= 0 ? num : -num;

// const divide = (dividend, divisor) => {
//     let residual = absolute(dividend);
//     let absDivisor = absolute(divisor);
//     let result = 0;
//     while (residual >= absDivisor) {
//         residual -= absDivisor;
//         result++;
//     }
//     return dividend * divisor >= 0 ? result : -result;
// };

const rec = (num, residual) => {
    if (num > residual) {
        return 0;
    }
    let n = 0;
    while ((2 ** (n + 1)) * num <= residual) {
        n++;
    }
    return (2 ** n) + rec(num, residual - (2 ** n) * num);
};

// const divide = (dividend, divisor) => {
//     let residual = absolute(dividend);
//     let absDivisor = absolute(divisor);
//     const res = rec(absDivisor, residual);
//     return dividend * divisor < 0 ? -res : res;
// };

const divide = (dividend, divisor) => {
    let residual = absolute(dividend);
    let absDivisor = absolute(divisor);
    let res = rec(absDivisor, residual);
    res = dividend * divisor < 0 ? -res : res;
        if (res > 2147483647) {
        res = 2147483647;
    } else if (res < -2147483648) {
        res = -2147483648;
    }
    return res;
};

console.log(divide(-2147483648, 5));
