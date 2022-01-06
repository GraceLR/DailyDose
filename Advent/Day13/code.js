
const { test, real } = require("./input");

// const max = input => {
//   let xmax = input[0][0];
//   let ymax = input[0][1];
//   input.forEach(arr => {
//     if(arr[0] > xmax) {
//       xmax = arr[0];
//     }
//     if(arr[1] > ymax) {
//       ymax = arr[1];
//     }
//   })
//   return { xmax, ymax };
// };


const day13Part1 = (input, fold) => {
  let objX = {};
  let objY = {};
  let count = 0;
  if(fold.axis === 'y') {
    for(let i = 0; i < input.length; i++) {
      const x = input[i][0];
      const y = input[i][1];
      if(objX[x] === undefined) {
        objX[x] = {};
      }
      if(Number(y) > fold.num) {
        const adjY = fold.num * 2 - Number(y);
        if(objX[x][adjY] === undefined) {
          objX[x][adjY] = {};
          count += 1;
        }
      } else {
        if(objX[x][y] === undefined) {
          objX[x][y] = {};
          count += 1;
        }
      }
    }
  }
  if(fold.axis === 'x') {
    for(let i = 0; i < input.length; i++) {
      const x = input[i][0];
      const y = input[i][1];
      if(objY[y] === undefined) {
        objY[y] = {};
      }
      if(Number(x) > fold.num) {
        const adjX = fold.num * 2 - Number(x);
        if(objY[y][adjX] === undefined) {
          objY[y][adjX] = {};
          count += 1;
        }
      } else {
        if(objY[y][x] === undefined) {
          objY[y][x] = {};
          count += 1;
        }
      }
    }
  }
  
  return count;
}

console.log(day13Part1(real.input, real.fold));