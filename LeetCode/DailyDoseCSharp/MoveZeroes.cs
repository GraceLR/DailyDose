public class Solution {
    public void MoveZeroes(int[] nums) {
        var numsLength = nums.Length;
        if (numsLength != 1)
        {
            var m = 0;
            for (int i = 0; i < numsLength; i++)
            {
                m++;
                if (nums[i] == 0)
                {
                    for (int j = m; j < numsLength; j++)
                    {
                        int numJ = nums[j];
                        if (numJ != 0)
                        {
                            nums[i] = numJ;
                            nums[j] = 0;
                            m = j;
                            break;
                        }
                    }
                    if (m == numsLength)
                    {
                        break;
                    }
                }
            }
        }
    }
}