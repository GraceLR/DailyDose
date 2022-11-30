using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class ClimbStairs
	{
		public static int Solution(int n)
		{
			if (n == 0)
			{
				return 1;
			}
			if (n < 0)
			{
				return 0;
			}
			var steps = new int[] { 1, 2 };
			int ways = 0;
			foreach (var step in steps)
			{
				ways += Solution(n - step);
			}
			return ways;
		}
	}
}

