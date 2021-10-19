
function sumXor(n) {

    let origin = n;
    
    let array = [];
    for (var i = 0; i < 50; i++) {
        array[i] = 2 ** (49 - i);
    }
    
    let temp = [];
    for (var i = 0; i < 50; i++) {
        if (Math.floor(n/array[i]) === 1) {
            temp.push(1);
            n -= array[i];
        } else {
            temp.push(0);
        }
    }
    
    temp = temp.slice(temp.indexOf(1));
    let counter = 0;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] === 0) {
            counter += 1;
        }
    }
    
    return origin === 0 ? 1 : 2 ** counter;
    
}

console.log(sumXor(0));