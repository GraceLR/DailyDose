const asFunc = (str) => {
  let ct = "";
  let i = 0;
  while (str[i] !== " ") {
    ct += str[i];
    i++;
  }
  let w = "";
  const arr = [];
  const len = str.length;
  for (let j = i + 1; j < len; j++) {
    const ele = str[j];
    w += ele;
    if (ele === "." || j === len - 1) {
      for (let z = 0; z < arr.length; z++) {
        arr[z] += w;
      }
      arr.push(w);
      w = "";
    }
  }
  const obj = {};
  arr.forEach((dm) => {
    obj[dm] = ct;
  });
  return obj;
};
const subdomainVisits = (cpdomains) => {
  const obj = {};
  for (const dm of cpdomains) {
    const res = asFunc(dm);
    for (const key in res) {
      if (obj[key] === undefined) {
        obj[key] = Number(res[key]);
      } else {
        obj[key] += Number(res[key]);
      }
    }
  }
  const arr = [];
  for (const key in obj) {
    arr.push(obj[key] + " " + key);
  }
  return arr;
};
