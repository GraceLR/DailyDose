public class Solution {
    public int FindSpecialInteger(int[] arr) {
        int length = arr.Length;
        var occurringsThreshold = (int) Math.Floor(0.25 * length); 
        int num = arr[0];
        for(int i = 0; i < length; i++)
        {
            if (arr[i] == arr[i + occurringsThreshold])
            {
                num = arr[i];
                break;
            }
        }
        return num;
    }
}