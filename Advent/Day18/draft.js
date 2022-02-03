

const arrRec = input => {

    const arr = [];
  
    for(let i = 0; i <= 1; i++) {
  
      const ele = input[i];
      arr[i] = typeof ele === 'object' ? arrRec(ele) : ele;
  
    }
  
    return arr;
  };

  const obj = {
      0: {
          0: 2,
          1: 3
      },
      1: {
          0: {
              0: 5,
              1: 6
          },
          1: 4
      }
  }

  console.log(arrRec(obj))