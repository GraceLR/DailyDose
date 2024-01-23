public class Solution {
    public int Fib(int n) {
        if (n == 0)
        {
            return 0;
        }
        if (n == 1)
        {
            return 1;
        }
        var m = 2;
        var fm_2 = 0;
        var fm_1 = 1;
        int fm = 1;
        while (m <= n)
        {
            fm = fm_1 + fm_2;
            fm_2 = fm_1;
            fm_1 = fm;
            m++;
        }
        return fm;
    }
}
