public class Solution {
    public int MySqrt(int x) {
        if (x == 0)
        {
            return 0;
        }
        var num = 1;
        while (x / num >= num)
        {
            num++;
        }
        return num - 1;
    }
}
