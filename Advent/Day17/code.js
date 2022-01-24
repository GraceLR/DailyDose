
const { test, real } = require("./input");

const day17part1 = (vxL, vxR, vyL, vyR) => {

  let vy;
  let n;
  let vx;
  let res = {
    res1: 0,
    res2: 0
  };

  for(let vx = 1; vx < vxR; vx++) {
    for(let vy = 1; vy < vyR; vy++) {
      for(let n = 1; n <= Number.MAX_VALUE; n++) {

        let nTotal = (2 * vy) + n + 1;
        let y = nTotal * n / 2;
        let x1 = (2 * vx - nTotal + 1) * nTotal / 2;
        let x2 = vx * (vx + 1) / 2;
        let height = ((vy + 1) * vy) / 2;

        if(y > vyR) {
          break;
        }
        if((y >= vyL && y <= vyR) && (vx >= nTotal) && 
          (x1 >= vxL && x1 <= vxR && x1 <= x2)) {
          res.res1 = height > res.res1 ? height : res.res1;
        }
        if((y >= vyL && y <= vyR) && (vx < nTotal) && 
          (x2 >= vxL && x2 <= vxR)) {
          res.res2 = height > res.res2 ? height : res.res2;
        }
      }
    }
  }

  return res;

};

console.log(day17part1(253,280,46,73));