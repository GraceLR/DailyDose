
const { test, real } = require("./input");

const trans = (obj, axis) => {

  const first = Object.keys(obj);
  let arr = [];
  for(let i = 0; i < first.length; i++) {
    const second = Object.keys(obj[first[i]]);
    for(let j = 0; j < second.length; j++) {
      if(axis === 'x') {
        arr.push([first[i], second[j]]);
      } else {
        arr.push([second[j], first[i]]);
      }
    }
  }
  return arr;
};


const day13Part2 = (input, fold) => {
  let inputAdj = input;
  for(let m = 0; m < fold.axis.length; m++) {
    let objX = {};
    let objY = {};
    if(fold.axis[m] === 'y') {
      for(let i = 0; i < inputAdj.length; i++) {
        let x = inputAdj[i][0];
        let y = inputAdj[i][1];
        if(objX[x] === undefined) {
          objX[x] = {};
        }
        if(Number(y) > fold['num'][m]) {
          const adjY = fold['num'][m] * 2 - Number(y);
          if(objX[x][adjY] === undefined) {
            objX[x][adjY] = {};
          }
        } else {
          if(objX[x][y] === undefined) {
            objX[x][y] = {};
          }
        }
      }
      inputAdj = trans(objX, 'x');
    }
    if(fold.axis[m] === 'x') {
      for(let i = 0; i < inputAdj.length; i++) {
        const x = inputAdj[i][0];
        const y = inputAdj[i][1];
        if(objY[y] === undefined) {
          objY[y] = {};
        }
        if(Number(x) > fold['num'][m]) {
          const adjX = fold['num'][m] * 2 - Number(x);
          if(objY[y][adjX] === undefined) {
            objY[y][adjX] = {};
          }
        } else {
          if(objY[y][x] === undefined) {
            objY[y][x] = {};
          }
        }
      }
      inputAdj = trans(objY, 'y');
    }  
  }
  return inputAdj;
};

const max = input => {
  let xmax = Number(input[0][0]);
  let ymax = Number(input[0][1]);
  input.forEach(arr => {
    if(Number(arr[0]) > xmax) {
      xmax = Number(arr[0]);
    }
    if(Number(arr[1]) > ymax) {
      ymax = Number(arr[1]);
    }
  })
  return { xmax, ymax };
};

const paint = input => {
  const xmax = max(input).xmax;
  const ymax = max(input).ymax;
  let map = [];
  for(let i = 0; i < ymax + 1; i++) {
    let row = [];
    for(let j = 0; j < xmax + 1; j++) {
      row.push('.');
    }
    map.push(row);
  }
  for(let i = 0; i < input.length; i++) {
    const row = Number(input[i][1]);
    const col = Number(input[i][0]);
    map[row][col] = 'o';
  }
  map = map.map(row => row.join(''));
  console.log(map);
};

paint(day13Part2(real.input, real.fold));
