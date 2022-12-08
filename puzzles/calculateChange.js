

const calculateChange = function(total, cash) {
  let changeCents = cash - total;
  let change = {};

  [
    {bill: 'twentyDollar', amount: 2000},
    {bill: 'tenDollar', amount: 1000},
    {bill: 'fiveDollar', amount: 500},
    {bill: 'twoDollar', amount: 200},
    {bill: 'oneDollar', amount: 100},
    {bill: 'quarter', amount: 25},
    {bill: 'dime', amount: 10},
    {bill: 'nickel', amount: 5},
    {bill: 'penny', amount: 1}
  ].forEach(function({bill, amount}) {
    const floor = Math.floor(changeCents / amount);
        
    if (floor >= 1) {
      change[bill] = floor;
      changeCents -= floor * amount;
    }
  });
    
  return change;
};
  
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));