public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var map = new Dictionary<int, int>();
        map[nums[0]] = 0;
        for (int i = 1; i < nums.Length; i++)
        {
            int num = nums[i];
            bool foundPos = map.ContainsKey(target - num);
            if (foundPos) 
            {
                var res = new int[] {map[target - num], i};
                return res;
            } else
            {
                map[nums[i]] = i;
            }
        }
        return null;
    }
}