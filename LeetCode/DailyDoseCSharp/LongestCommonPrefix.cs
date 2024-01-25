public class Solution {
    public int bb;
    public string LongestCommonPrefix(string[] strs) {
        var b = nameof(Aname);
        var commenPrefix = "";
        for (int i = 0; i < strs[0].Length; i++)
        {
            char c = strs[0][i];
            for (int j = 1; j < strs.Length; j++)
            {
                if (strs[j].Length <= i || strs[j][i] != c)
                {
                    return commenPrefix;
                }
            }
            commenPrefix += c;
        }
        return commenPrefix;
    }
}