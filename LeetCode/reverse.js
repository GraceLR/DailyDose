
// can not overflow at anytime

const reverse = x => {

  let y = x;

  if (y < 0) {

    y = -y;

  }

  const maxInt = (2 ** 31) - 1;
  const maxIntModu = maxInt % 10;

  let res = 0;

  while (y >= 10 || y <= -10) {

    const modu = y % 10;
    
    res = res * 10 + modu;

    if (res > maxInt / 10 ||
            (res >= (maxInt - maxIntModu) / 10 &&
            modu >= maxIntModu + 1)) {

      return 0;

    }

    y = Math.floor(y / 10);
    
  }

  res = res * 10 + y;

  return x < 0 ? -res : res;

};


console.log(reverse(15342364));