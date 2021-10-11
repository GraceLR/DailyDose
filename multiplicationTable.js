
const multiplicationTable = function(maxValue) {
    let matrix = '';
    for (var i = 1; i <= maxValue; i++) {
        for (var j = 1; j <= maxValue; j++) {
            matrix += i*j + ' ';
        }
        matrix += '\n';
    }
    return matrix;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));