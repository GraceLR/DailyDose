const fizzBuzz = (n) => {
  const arr = [
    [3, 5],
    ["Fizz", "Buzz"],
  ];
  const len = arr[0].length;
  const res = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < len; j++) {
      if (i % arr[0][j] === 0) {
        str += arr[1][j];
      }
    }
    if (str === "") {
      str += i.toString();
    }
    res.push(str);
  }
  return res;
};
