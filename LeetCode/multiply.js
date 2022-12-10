const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const len1 = num1.length;
  const len2 = num2.length;
  const res = [];
  let carryRes = 0;
  for (let i = len1 - 1; i >= 0; i--) {
    const ele1 = Number(num1[i]);
    let carry = 0;
    for (let j = len2 - 1; j >= 0; j--) {
      const ele2 = Number(num2[j]);
      const num = ele1 * ele2 + carry;
      const mod = num % 10;
      carry = Math.floor(num / 10);
      if (res[len1 - i + len2 - j - 2] === undefined) {
        res[len1 - i + len2 - j - 2] = 0;
      }
      const numRes = res[len1 - i + len2 - j - 2] + mod + carryRes;
      const modRes = numRes % 10;
      carryRes = Math.floor(numRes / 10);
      res[len1 - i + len2 - j - 2] = modRes;
    }
    if (carry || carryRes) {
      res.push(carry + carryRes);
      carryRes = 0;
    }
  }
  let string = "";
  res.forEach((ele) => {
    string = ele + string;
  });
  return string;
  return string;
};

console.log(multiply("523564086927429363577662123518880", "3975965131624"));
