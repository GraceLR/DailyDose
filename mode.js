

const mode = function(arr) {

  let newArray = arr.sort(function(a, b) {
    return a - b;
  });
  
  let count = 1;
  let num = newArray[0];
  let currCount = 1;
  
  for (let i = 0; i < newArray.length - 1; i++) {
    if (newArray[i] === newArray[i + 1]) {
      currCount += 1;
    } else {
      if (currCount > count) {
        count = currCount;
        num = newArray[i];
      }
      currCount = 1;
    }
  }
  
  return num;
  
};