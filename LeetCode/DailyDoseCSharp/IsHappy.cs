public class Solution {
    public bool IsHappy(int n) {
        var seen = new HashSet<int>() { n };
        while (n != 1)
        {
            n = SquareOfDigits(n);

            if (seen.Contains(n))
            {
                return false;
            }
            seen.Add(n);
        }
        return true;
    }

    int SquareOfDigits(int n) {
        var ret = 0;
        while (n > 0)
        {
            var digit = n % 10;
            ret += (int) Math.Pow(digit, 2);
            n /= 10;
        }
        return ret;
    }
}