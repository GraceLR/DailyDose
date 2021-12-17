

function miniMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
    
  console.log((sum - max) + ' ' + (sum - min));

}