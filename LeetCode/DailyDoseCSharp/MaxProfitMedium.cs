public class Solution {
    public int MaxProfit(int[] prices) {
        int direction = 0;
        int localLow = prices[0];
        int maxProfit = 0;
        int pricesMaxIndex = prices.Length - 1;
        for (int i = 1; i <= pricesMaxIndex ; i++)
        {
            int price = prices[i];
            int previousPrice = prices[i - 1];
            if (price < previousPrice)
            {
                if (direction == 1)
                {
                    maxProfit += previousPrice - localLow;
                }
                direction = -1;
            }
            else if (price > previousPrice)
            {
                if (direction == -1)
                {
                    localLow = previousPrice;
                }
                direction = 1;
            }
        }
        return direction == 1 ? maxProfit + prices[pricesMaxIndex] - localLow : maxProfit;
    }
}
