public class Solution {
    public int RemoveDuplicates(int[] nums) {
        var i = 1;
        var j = 1;
        int numsLength = nums.Length;
        while (j < numsLength)
        {
            if (nums[j] != nums[j - 1])
            {
                nums[i] = nums[j];
                i++;
            }
            j++;
        }
        return i;
    }
}
