const absolute = num => num >= 0 ? num : -num;
const divide = (dividend, divisor) => {
    let residual = absolute(dividend);
    let absDivisor = absolute(divisor);
    let result = 0;
    while (residual >= absDivisor) {
        residual -= absDivisor;
        result++;
    }
    return dividend * divisor >= 0 ? result : -result;
};

console.log(divide(-2147483648, -1));