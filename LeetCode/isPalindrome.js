const isPalindrome = x => {
    let xCopy = x;
    let reverted = 0;
    while (xCopy > 0) {
        let modulo = xCopy % 10;
        xCopy = Math.floor(xCopy / 10);
        reverted = reverted * 10 + modulo;
    }
    return x === reverted ? true : false;
};