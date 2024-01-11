public class Solution {
    public bool ValidPalindromeCheck(string s, int i, int j, bool removed)
    {
        if (i >= j)
        {
            return true;
        }
        if (s[i] != s[j])
        {
            if (removed)
            {
                return false;
            }
            return ValidPalindromeCheck(s, i + 1, j, true) || ValidPalindromeCheck(s, i, j - 1, true);
        }
        else
        {
            return ValidPalindromeCheck(s, i + 1, j - 1, removed);
        }
    }
    public bool ValidPalindrome(string s) {
        return ValidPalindromeCheck(s, 0, s.Length - 1, false);
    }
}