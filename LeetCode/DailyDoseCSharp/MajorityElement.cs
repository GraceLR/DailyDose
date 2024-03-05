public class Solution {
    public int MajorityElement(int[] nums) {
        var numsDictionary = new Dictionary<int, int>();
        int appearance = nums.Length / 2;
        foreach (int num in nums)
        {
            if (numsDictionary.ContainsKey(num))
            {
                numsDictionary[num]++;
            }
            else
            {
                numsDictionary.Add(num, 1);
            }
            if (numsDictionary[num] > appearance)
            {
                return num;
            }
        }
        return -1;
    }
}
