public class Solution {
    public string MergeAlternately(string word1, string word2) {
        var word1Length = word1.Length;
        var word2Length = word2.Length;
        var length = Math.Max(word1Length, word2Length);
        string mergedString = "";
        for (int i = 0; i < length; i++) 
        {
            if (word1Length > i)
            {
                mergedString += word1[i];
            }
            if (word2Length > i)
            {
                mergedString += word2[i];
            }
          
        }
        return mergedString;
    }
        
}