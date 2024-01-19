public class Solution {
    public void ReverseString(char[] s) {
        int sLength = s.Length;
        int threshold = sLength / 2;
        int i = 0;
        while (i < threshold)
        {
            char character = s[i];
            s[i] = s[sLength - 1 - i];
            s[sLength - 1 - i] = character;
            i++;
        }
    }
}
