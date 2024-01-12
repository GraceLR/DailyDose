public class Solution {
    public int FindSpecialInteger(int[] arr) {
        int length = arr.Length;
        int specialNum = arr[0];
        if (length == 1)
        {
            return specialNum;
        }
        var specialNumCountThreshold = (int) Math.Floor(0.25 * length) + 1;
        var specialNumCount = 1;
        for(int i = 1; i < length; i++)
        {
            int localNum = arr[i];
            if (localNum == arr[i - 1])
            {
                specialNumCount++;
                if (specialNumCount >= specialNumCountThreshold)
                {
                    break;
                }
            }
            else
            {
                specialNum = localNum;
                specialNumCount = 1;
            }
        }
        return specialNum;
    }
}