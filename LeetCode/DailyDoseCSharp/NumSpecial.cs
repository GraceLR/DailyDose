public class Solution {
    public int NumSpecial(int[][] mat) {
        var rowHash = new HashSet<int>();
        var colHash = new HashSet<int>();
        var specialPositionCount = 0;
        for (int i = 0; i < mat.Length; i++)
        {
            for (int j = 0; j < mat[0].Length; j++)
            {
                if (mat[i][j] == 1)
                {
                    if (!rowHash.Contains(i) && !colHash.Contains(j))
                    {
                        var isSpecialPosition = true;
                        for (int p = 0; p < mat[0].Length; p++)
                        {
                            if (p != j && mat[i][p] == 1)
                            {
                                isSpecialPosition = false;
                                break;
                            }
                        }
                        if (isSpecialPosition)
                        {
                            for (int p = 0; p < mat.Length; p++)
                            {
                                if (p != i && mat[p][j] == 1)
                                {
                                    isSpecialPosition = false;
                                    break;
                                }
                            }
                            if (isSpecialPosition)
                            {
                                specialPositionCount++;
                            }
                        }
                    }
                    rowHash.Add(i);
                    colHash.Add(j);
                }
            }
        }
        return specialPositionCount;
    }
}
