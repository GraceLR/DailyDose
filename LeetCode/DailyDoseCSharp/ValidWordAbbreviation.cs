public class Solution {
    public bool ValidWordAbbreviation(string word, string abbr) {
        var wordLength = word.Length;
        var abbrLength = abbr.Length;
        var lengthChecked = 0;
        if (abbrLength > wordLength)
        {
            return false;
        }
        var numString = "";
        var j = 0;
        for (int i = 0; i < abbrLength; i++)
        {
            char abbrChar = abbr[i];
            if (Char.IsNumber(abbrChar))
            {
                if (numString == "" && abbrChar == '0')
                {
                    return false;
                }
                numString += abbrChar;
                if (i == abbrLength - 1)
                {
                    int.TryParse(numString, out int num);
                    lengthChecked = num + j;
                }
            }
            else
            {
                if (numString != "")
                {
                    int.TryParse(numString, out int num);
                    j += num;
                    numString = "";
                }
                if (j >= wordLength || word[j] != abbr[i])
                {
                    return false;
                }
                j++;
                lengthChecked = j;
            }
        }
        return lengthChecked == wordLength ? true : false;
    }
}
