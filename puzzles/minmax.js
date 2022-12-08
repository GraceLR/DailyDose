
const minmax = function(list) {

  if (list === []) {
    return [undefined, undefined];
  } else {
    let min = list[0];
    let max = list[0];
    list.forEach(ele => {
      if (ele > max) {
        max = ele;
      }
      if (ele < min) {
        min = ele;
      }
    });
    return [min, max];
  }
  
};