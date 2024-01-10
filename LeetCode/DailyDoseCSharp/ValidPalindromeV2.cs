public class Solution {
    public bool IsPalindrome(string s) {
        var stringLength = s.Length;
        var i = 0;
        var j = stringLength - 1;
        while (i < j)
        {
            if (s[i] != s[j])
            {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    public bool ValidPalindrome(string s) {
        if (IsPalindrome(s))
        {
            return true;
        }
        var sLength = s.Length;
        for (int i = 0; i < sLength; i++)
        {
            string newS = s.Remove(i, 1);
            if (IsPalindrome(newS))
            {
                return true;
            }
        }
        return false;
    }
}