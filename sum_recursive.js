
const sum_recursive = (num) => {

    if(num === 1) {
        return 1;
    }

    return num + sum_recursive(num-1);

}
console.log(sum_recursive(3));