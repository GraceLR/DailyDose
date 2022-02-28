
let originalDigits = s => {

    const numArr = 
    [
        { num: 0, arr: ['z', 'e', 'r', 'o'] },
        { num: 2, arr: ['w', 't', 'o'] },
        { num: 4, arr: ['u', 'f', 'r', 'o'] },
        { num: 6, arr: ['x', 'i', 's'] },
        { num: 8, arr: ['g', 'e', 'i', 'h', 't'] },
        { num: 1, arr: ['o', 'n', 'e'] },
        { num: 3, arr: ['t', 'h', 'r', 'e', 'e'] },
        { num: 5, arr: ['f', 'i', 'v', 'e'] },
        { num: 7, arr: ['s', 'e', 'v', 'e', 'n'] },
        { num: 9, arr: ['i', 'n', 'n', 'e'] }
    ];

  let sObj = {};
  s.split('').forEach(ele => {
    sObj[ele] = sObj[ele] === undefined ? 1 : sObj[ele] + 1;
  });

  let res = [];

  for (let i = 0; i < 10; i++) {

    const obj = numArr[i];
    const arr = obj['arr'];
    const ct = sObj[arr[0]]
    if(ct !== undefined) {
        res.push(obj['num']);
        arr.forEach(l => {
            sObj[l] -= ct;
            if(sObj[l] === 0) {
                delete sObj[l];
            }
        });
    }

    if (Object.keys(sObj).length === 0) {
        break;
      }

  }

  return res.sort((a, b) => a - b).join('');
  
};

console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine"));
