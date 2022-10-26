const fizzBuzz = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    if (num % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (num % 3 === 0) {
      arr.push("Fizz");
    } else if (num % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(num.toString());
    }
  }
  return arr;
};
