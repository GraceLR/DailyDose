public class Solution {
    public string ReverseWords(string s) {
        string reversedString = "";
        string word = "";
        for (int i = s.Length - 1; i >= 0; i--)
        {
            char character = s[i];
            if (character == ' ')
            {
                reversedString = " " + word + reversedString;
                word = "";
            }
            else
            {
                word += character;
            }
            if (i == 0)
            {
                reversedString = word + reversedString;
            }
        }
        return reversedString;
    }
}