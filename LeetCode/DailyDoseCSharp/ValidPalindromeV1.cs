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
            var jBegin = 0;
            var jEnd = sLength - 1;
            while (jBegin < jEnd)
            {
                if (jBegin == i)
                {
                    jBegin++;
                }
                if (jEnd == i)
                {
                    jEnd--;
                }
                if (s[jBegin] != s[jEnd])
                {
                    break;
                }
                jBegin++;
                jEnd--;
            }
            if (jBegin >= jEnd)
            {
                return true;
            }
        }
        return false;
    }
}