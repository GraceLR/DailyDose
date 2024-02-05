public class Solution {
    public int[] GetConcatenation(int[] nums) {
        int numsLength = nums.Length;
        var concatenatedNums = new int[2 * numsLength];
        for (int i = 0; i < numsLength; i++)
        {
            int num = nums[i];
            concatenatedNums[i] = num;
            concatenatedNums[i + numsLength] = num;
        }
        return concatenatedNums;
    }
}
