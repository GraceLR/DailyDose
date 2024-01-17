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
        string binary = Convert.ToString(n, 2);
        for (int i = 1; i < binary.Length; i++)
        {
            if (binary[i] == '1')
            {
                return false;
            }
        }
        return true;
    }
}