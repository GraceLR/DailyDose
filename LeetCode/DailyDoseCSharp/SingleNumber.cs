public class Solution {
    public int SingleNumber(int[] nums) {
        var xor = 0;
        foreach (int num in nums)
        {
            xor ^= num;
        }
        return xor;
    }
}
