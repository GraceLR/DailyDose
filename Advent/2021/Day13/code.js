
const { test, real } = require("./input");

const trans = (obj, axis) => {

  const first = Object.keys(obj);
  let arr = [];
  for (let i = 0; i < first.length; i++) {
    const second = Object.keys(obj[first[i]]);
    for (let j = 0; j < second.length; j++) {
      if (axis === 'x') {
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
  for (let m = 0; m < fold.axis.length; m++) {

    const Axis = fold.axis[m];
    let obj = {};
    let objAxN;
    let foldAxN;
    let temp;
    if(Axis === 'y') {
      objAxN = 0;
      foldAxN = 1;
      temp = 'x';
    } else {
      objAxN = 1;
      foldAxN = 0;
      temp = 'y';
    }

    for (let i = 0; i < inputAdj.length; i++) {
      const objAx = inputAdj[i][objAxN];
      const foldAx = inputAdj[i][foldAxN];
      if (obj[objAx] === undefined) {
        obj[objAx] = {};
      }
      if (Number(foldAx) > fold['num'][m]) {
        const adjFoldAx = fold['num'][m] * 2 - Number(foldAx);
        obj[objAx][adjFoldAx] = {};
      } else {
        obj[objAx][foldAx] = {};
      }
    }
    inputAdj = trans(obj, temp);
  }
  return inputAdj;
};

const max = input => {
  let xmax = Number(input[0][0]);
  let ymax = Number(input[0][1]);
  input.forEach(arr => {
    if (Number(arr[0]) > xmax) {
      xmax = Number(arr[0]);
    }
    if (Number(arr[1]) > ymax) {
      ymax = Number(arr[1]);
    }
  });
  return { xmax, ymax };
};

const paint = input => {
  const xmax = max(input).xmax;
  const ymax = max(input).ymax;
  let map = [];
  for (let i = 0; i < ymax + 1; i++) {
    let row = [];
    for (let j = 0; j < xmax + 1; j++) {
      row.push('.');
    }
    map.push(row);
  }
  for (let i = 0; i < input.length; i++) {
    const row = Number(input[i][1]);
    const col = Number(input[i][0]);
    map[row][col] = 'o';
  }
  map = map.map(row => row.join(''));
  console.log(map);
};

paint(day13Part2(real.input, real.fold));
