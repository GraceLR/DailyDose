public class Solution {
    public int ClimbStairs(int n) {
        // if (n == 0)
        // {
        //     return 1;
        // }
        // if (n < 0)
        // {
        //     return 0;
        // }
        // var steps = new int[] {1, 2};
        // int ways = 0;
        // foreach (var step in steps)
        // {
        //     ways += ClimbStairs(n - step);
        // }
        // return ways;
        int staircase = 3;
        var ways = new List<int>(){1, 2};
        while (staircase <= n)
        {
            ways.Add(ways[staircase - 3] + ways[staircase - 2]);
            staircase++;
        }
        return ways[n - 1];
    }
}