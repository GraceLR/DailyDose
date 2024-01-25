public class Solution {
    public int MySqrt(int x) {
        if (x == 0)
        {
            return 0;
        }
        if (x == 1)
        {
            return 1;
        }
        var left = 0;
        var right = x;
        int mid = x / 2;
        while (left < right - 1)
        {
            int num = x / mid;
            if (num == mid)
            {
                return num;
            }
            if (num > mid)
            {
                left = mid;
            }
            else {
                right = mid;
            }
            mid = (left + right) / 2;
        }
        return mid;
    }
}
