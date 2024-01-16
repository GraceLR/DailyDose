public class Solution {
    public bool IsPowerOfTwo(int n) {
        if (n == 1)
        {
            return true;
        }
        if (n <= 0)
        {
            return false;
        }
        while (true)
        {
            if (n % 2 == 1)
            {
                break;
            }
            if (n == 2)
            {
                return true;
            }
            n /= 2;
        }
        return false;
    }
}