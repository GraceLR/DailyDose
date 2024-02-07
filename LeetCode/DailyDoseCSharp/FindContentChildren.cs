public class Solution {
    public int FindContentChildren(int[] g, int[] s) {
        Array.Sort(g);
        Array.Sort(s);
        var i = 0;
        var j = 0;
        int gLength = g.Length;
        int sLength = s.Length;
        var maximumContentChildrenCount = 0;
        while (i < gLength && j < sLength)
        {
            if (g[i] <= s[j])
            {
                maximumContentChildrenCount++;
                i++;
            }
            j++;
        }
        return maximumContentChildrenCount;
    }
}
