

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else if (arr[i] === 0) {
      zero += 1;
    }
  }
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}