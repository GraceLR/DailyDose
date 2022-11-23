public class Solution {
    public IList<IList<int>> Generate(int numRows) {
        int[][] pascal = new int[numRows][];
        pascal[0] = new int[] { 1 };
        int i = 1;
        while (i < numRows)
        {
            int[] row = new int[i + 1];
            row[0] = 1;
            for (int j = 1; j < pascal[i - 1].Length; j++)
            {
                row[j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
            }
            row[i] = 1;
            pascal[i] = row;
            i++;
        }
        return pascal;
    }
}