public class Solution {
    public int[][] Transpose(int[][] matrix) {
        var rowLength = matrix[0].Length;
        var colLength = matrix.Length;
        var transposeMatrix = new int[rowLength][];
        for (int i = 0; i < rowLength; i++)
        {
            transposeMatrix[i] = new int[colLength];
            for (int j = 0; j < colLength; j++)
            {
                transposeMatrix[i][j] = matrix[j][i];
            }
        }
        return transposeMatrix;
    }
}