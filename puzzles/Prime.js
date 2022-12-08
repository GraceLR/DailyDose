
const prime = (q) => {
    
  let result = [2];
  let num = 3;
    
  while (result.length < q) {
    let cond = true;
    for (let i = 1; i < result.length - 1; i++) {
      cond = cond && (num % result[i] !== 0);
      if (!cond) {
        break;
      }
    }
    if (cond) {
      result.push(num);
    }
    num += 2;
  }
  return result;
};

function waiter(number, q) {
    
  let prm = prime(q);
  let n = 0;
  let b = [];
  let copy = number;
  while (n < q) {
    let a = [];
    copy.forEach(ele => {
      ele % prm[n] === 0 ? b.push(ele) : a.push(ele);
    });
    copy = a;
    n += 1;
  }
  return b.concat(copy);
}