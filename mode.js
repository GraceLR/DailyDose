

const mode = function(arr) {

  const dict = {};
  let num;
  let maxCount = 0;
  
  arr.forEach(n => {
    if (dict[n] === undefined) {
      dict[n] = 1;
    } else {
      dict[n] += 1;
    }
  
    if (dict[n] > maxCount) {
      maxCount = dict[n];
      num = n;
    }
  });
    
  return num;
  
};