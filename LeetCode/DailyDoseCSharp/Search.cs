using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class Search
	{
		public static int Solution(int[] nums, int target)
		{
			int left = 0;
			int right = nums.Length - 1;
			while (left <= right)
			{
				int mid = (left + right) / 2;
				int midNum = nums[mid];
				if (midNum == target)
				{
					return mid;
				}
				if (midNum > target)
				{
					right = mid - 1;
				}
				else
				{
					left = mid + 1;
				}
			}
			return -1;
		}
	}
}


