

const tempConverter = function(value, cToF) {

  if (typeof value !== 'number') {
    return NaN;
  } else if (cToF === true) {
    return Number((value * 9 / 5) + 32);
  } else if (cToF === false) {
    return Number((value - 32) * 5 / 9).toFixed(1);
  }
  
};