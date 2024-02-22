public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int numsLength = nums.Length;
        if (numsLength < 3)
        {
            return numsLength;
        }
        var i = nums[1] == nums[0] ? 2 : 1;
        var j = i;
        while (j < numsLength)
        {
            if (nums[j] != nums[j - 1])
            {
                nums[i] = nums[j];
                i++;
                if (j + 1 < numsLength && nums[j + 1] == nums[j])
                {
                    j++;
                    nums[i] = nums[j];
                    i++;
                }
            }
            j++;
        }
        return i;
    }
}