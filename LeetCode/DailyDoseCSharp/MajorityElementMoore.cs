public class Solution {
    public int MajorityElement(int[] nums) {
        var vote = 0;
        var majorityElement = 0;
        foreach (int num in nums)
        {
            if (vote == 0)
            {
                majorityElement =  num;
            }
            if (majorityElement == num) {
                vote++;
            } else {
                vote--;
            }
        }
        return majorityElement;
    }
}