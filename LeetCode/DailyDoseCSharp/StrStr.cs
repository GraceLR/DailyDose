public class Solution {
    public int StrStr(string haystack, string needle) {
        var needlePosition = new List<int>();
        int needleLength = needle.Length;
        for (int i = 0; i < haystack.Length; i++)
        {
            char haystackChar = haystack[i];
            if (haystackChar == needle[0])
            {
                needlePosition.Add(0);
            }
            for (int j = needlePosition.Count - 1; j >= 0; j--)
            {
                int position = needlePosition[j];
                if (position == 0 || haystackChar == needle[position])
                {
                    if (position + 1 == needleLength)
                    {
                        return i - needleLength + 1;
                    }
                    needlePosition[j] = position + 1;
                }
                else
                {
                    needlePosition.RemoveAt(j);
                }
            }
        }
        return -1;
    }
}
