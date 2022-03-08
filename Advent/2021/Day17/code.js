
const { test, real } = require("./input");

const resCt = obj => {
  const xKeys = Object.keys(obj);
  let resCt = 0;
  xKeys.forEach(x => {
    const yKeys = Object.keys(obj[x]);
    resCt += yKeys.length;
  });
  return resCt;
};

const day17part2 = (vxL, vxR, vyL, vyR) => {

  let vy;
  let n;
  let vx;
  let res = {};

  for(let vx = 1; vx <= vxR; vx++) {
    for(let vy = 1; vy < vyR; vy++) {
      for(let n = 1; n <= Number.MAX_VALUE; n++) {

        let nTotal = (2 * vy) + n + 1;
        let y = nTotal * n / 2;
        let x1 = (2 * vx - nTotal + 1) * nTotal / 2;
        let x2 = vx * (vx + 1) / 2;

        if(y > vyR) {
          break;
        }
        if((y >= vyL && y <= vyR) && (vx >= nTotal) && 
          (x1 >= vxL && x1 <= vxR && x1 <= x2)) {
            if(res[vx] === undefined) {
              res[vx] = {};
            }
            res[vx][vy] = true;
        }
        if((y >= vyL && y <= vyR) && (vx < nTotal) && 
          (x2 >= vxL && x2 <= vxR)) {
            if(res[vx] === undefined) {
              res[vx] = {};
            }
            res[vx][vy] = true;
        }
      }
    }
    for(let vy = -vyR; vy <= 0; vy++) {
      for(let n = 1; n <= Number.MAX_VALUE; n++) {

        let nTotal = n;
        let y = ((-2) * vy + n - 1) * n / 2;
        let x1 = (2 * vx - nTotal + 1) * nTotal / 2;
        let x2 = vx * (vx + 1) / 2;

        if(y > vyR) {
          break;
        }
        if((y >= vyL && y <= vyR) && (vx >= nTotal) && 
          (x1 >= vxL && x1 <= vxR && x1 <= x2)) {
            if(res[vx] === undefined) {
              res[vx] = {};
            }
            res[vx][vy] = true;
        }
        if((y >= vyL && y <= vyR) && (vx < nTotal) && 
          (x2 >= vxL && x2 <= vxR)) {
            if(res[vx] === undefined) {
              res[vx] = {};
            }
            res[vx][vy] = true;
        }
      }
    }
  }

  return resCt(res);

};

console.log(day17part2(253,280,46,73));