

const repeatNumbers = function(data) {
    let whole = '';
    data.forEach(function ([num, freq]) {
        for (var i = 1; i <= freq; i++) {
            whole += num;
        }
        whole += ', ';
    })
    return whole.slice(0, -2);
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

