const maxProfit = (prices) => {
  const len = prices.length;
  let maxProfit = 0;
  if (len > 1) {
    let left = 0;
    let right;
    let leftNum = prices[0];
    let rightNum = 0;
    for (let i = 1; i < len; i++) {
      if (prices[i] > prices[i - 1]) {
        if (prices[left] < leftNum) {
          leftNum = prices[left];
          rightNum = 0;
        }
        right = i;
      } else if (prices[i] < prices[i - 1]) {
        if (right !== undefined) {
          rightNum = Math.max(rightNum, prices[right]);
        }
        maxProfit = Math.max(maxProfit, rightNum - leftNum);
        left = i;
      }
    }
    if (right !== undefined) {
      maxProfit = Math.max(maxProfit, prices[right] - leftNum);
    }
  }
  return maxProfit;
};
