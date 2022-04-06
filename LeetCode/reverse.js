
const reverse = x => {

    let y = x;

    if (y < 0) {

        y = -y;

    }

    let res = 0;

    while (y >= 10 || y <= -10) {
    
        res = res * 10 + (y % 10);
    
        y = Math.floor(y / 10);
    
    }

    res = res * 10 + y

    res = res > (2 ** 31) - 1 || res < (-2) ** 31 ? 0 : res;
    // if we can tell in the first step, would be faset

    return x < 0 ? -res : res;

};


console.log(reverse(-123));