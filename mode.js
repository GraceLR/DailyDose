

const mode = function(arr) {
    
  let newArray = arr.sort(function(a, b) {
    return a - b;
  });

  let num = undefined;
  const recurse = (array) => {
    if (array.length === 0) {
      return 0;
    }

    let count = 0;
    let i = 0;
    while (array[i] === array[0] && i < array.length) {
      count += 1;
      i += 1;
    }

    const val = recurse(array.slice(i));

    if (val > count) {
      return val;
    } else {
      num = array[0];
      return count;
    }

  };

  recurse(newArray);
  
  return num;
  
};