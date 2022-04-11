
const intToRoman = num => {

  const roman = [
    { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX' }, { 1: 'X', 4: 'XL', 5: 'L', 9: 'XC' },
    { 1: 'C', 4: 'CD', 5: 'D', 9: 'CM' }, { 1: 'M' }
  ];

  let i = 0;
  let res = '';

  while (num > 0) {

    const int = num % 10;
    num = (num - int) / 10;

    if (roman[i][int]) {

      res = roman[i][int] + res;

    } else if (int < 4) {

      for (let j = 0; j < int; j++) {

        res = roman[i]['1'] + res;
        
      }

    } else if (int < 9) {

      let push = roman[i]['5'];

      for (let j = 5; j < int; j++) {

        push += roman[i]['1'];
        
      }

      res = push + res;

    }

    i++;

  }

  return res;

};

console.log(intToRoman(1994));
