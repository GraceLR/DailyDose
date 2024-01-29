public class Solution {
    public string ConvertToTitle(int columnNumber) {
        string alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string col = "";
        while (columnNumber > 0)
        {
            int mod = columnNumber % 26;
            col = (mod == 0 ? alphabet[26] : alphabet[mod]) + col;
            columnNumber = (columnNumber - 1) / 26;
        }
        return col;
    }
}
