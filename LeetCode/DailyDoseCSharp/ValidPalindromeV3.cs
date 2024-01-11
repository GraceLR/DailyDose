public class Solution {
    public bool ValidPalindrome(string s) {
        var stringLength = s.Length;
        var i = 0;
        var j = stringLength - 1;
        bool removedChar = false;
        bool succeeded = true;

        while (i < j)
        {
            if (s[i] != s[j])
            {
                if (removedChar) {
                    succeeded = false;
                    break;
                } else if (s[i+1] == s[j]) {
                    i++;
                    removedChar = true;
                } else if (s[i] == s[j-1]) {
                    j--;
                    removedChar = true;
                } else {
                    succeeded = false;
                    break;
                }
            }
            i++;
            j--;
        }

        if (succeeded) {
            return true;
        }

        i = 0;
        j = stringLength - 1;
        removedChar = false;
        while (i < j)
        {
            if (s[i] != s[j])
            {
                if (removedChar) {
                    return false;
                } else if (s[i] == s[j-1]) {
                    j--;
                    removedChar = true;
                } else if (s[i+1] == s[j]) {
                    i++;
                    removedChar = true;
                } else {
                    return false;
                }
            }
            i++;
            j--;
        }

        return true;
    }
}