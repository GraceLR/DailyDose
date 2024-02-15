public class Solution {
    public int RemoveElement(int[] nums, int val) {
        var i = 0;
        var j = nums.Length - 1;
        if (j <= 0)
        {
            return  j < 0 || nums[0] == val ? 0 : 1;
        }
        while (i < j)
        {
            if (nums[i] == val)
            {
                while (nums[j] == val)
                {
                    if (i == j)
                    {
                        return i;
                    }
                    j--;
                }
                nums[i] = nums[j];
                nums[j] = val;
            }
            i++;
        }
        return nums[i] == val ? i : i + 1;
    }
}
