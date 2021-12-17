

const sumXor = function(n) {
    
  let array = [];
  for (let i = 0; i < 47; i++) {
    array[i] = 2 ** (46 - i);
  }
    
  let temp = [];
  for (let i = 0; i < 47; i++) {
    if (Math.floor(n / array[i]) === 1) {
      temp.push(1);
      n -= array[i];
    } else {
      temp.push(0);
    }
  }
    
  return temp;
};

console.log(sumXor(10));