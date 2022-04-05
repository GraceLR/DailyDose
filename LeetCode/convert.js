

const convert = (s, numRows) => {

  let i = 0;
  const dirFunc = {
    'left': () => i--,
    'right': () => i++
  };
  let direction = undefined;
  let resArr = [];

  for (let j = 0; j < s.length; j++) {

    const char = s[j];

    if (resArr[i] === undefined) {

      resArr[i] = char;

    } else {

      resArr[i] += char;

    }

    if (i === 0) {
      direction = 'right';
    } else if (i === numRows - 1) {
      direction = 'left';
    }

    dirFunc[direction]();

  }

  return resArr.join('');

};

console.log(convert('P', 1));