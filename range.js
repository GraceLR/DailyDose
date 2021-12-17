
const range = function(count, skipZero, descending) {

  if (typeof count !== 'number') {
    return [];
  }
  
  let arr = [];
  
  if (descending === true) {
    let num = skipZero === true ? count : count - 1;
    for (let i = 0; i < count; i++) {
      arr.push(num);
      num -= 1;
    }
  } else {
    let num = skipZero === true ? 1 : 0;
    for (let i = 0; i < count; i++) {
      arr.push(num);
      num += 1;
    }
  }
  return arr;
};