public class Solution {
    public string InBetween(string input, string left, string right, bool isTillEnd) {
      int leftIndex = input.IndexOf(left);
      if (leftIndex == -1) 
      {
        return null;
      }
      else
      {
        leftIndex += left.Length;
      }
      int rightIndex = input.IndexOf(right);
      if (rightIndex == -1)
      {
        if (!isTillEnd)
        {
          return null;
        }
        else{
          rightIndex = input.Length;
        }
      }
      if (leftIndex >= rightIndex)
      {
        return null;
      }
      return input.Substring(leftIndex, rightIndex - leftIndex);
    }
}