public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        var i = m - 1;
        var j = n - 1;
        var z = m + n - 1;
        while (z >= 0)
        {
            if (i < 0)
            {
                nums1[z] = nums2[j];
                j--;
            }
            else if (j < 0)
            {
                nums1[z] = nums1[i];
                i--;
            }
            else
            {
                int num1 = nums1[i];
                int num2 = nums2[j];
                if (num1 <= num2)
                {
                    nums1[z] = num2;
                    j--;
                    if (num1 == num2)
                    {
                        z--;
                        nums1[z] = num1;
                        i--;
                    }
                }
                else
                {
                    nums1[z] = num1;
                    i--;
                }
            }
            z--;
        }
    }
}
