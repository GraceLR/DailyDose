
// const titleCase = str => {

//     if (str === '') {
//         return '';
//     }

//     if(str.indexOf(' ') < 0) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//     } else {
//         return str[0].toUpperCase() + str.slice(1, str.indexOf(' ')).toLowerCase() + ' ' +
//         titleCase(str.slice(str.indexOf(' ') + 1));
//     }

// }

const titleCase = str => {

  if (str === '') {
    return '';
  }
    
  let res = [str[0].toUpperCase()];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      res.push(str[i].toUpperCase());
    } else {
      res.push(str[i].toLowerCase());
    }
  }
  return res.join('');

};

console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase("A"));
console.log(titleCase(""));
console.log(titleCase("this is an example"));
console.log(titleCase("i r cool"));