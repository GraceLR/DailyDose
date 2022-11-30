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
			int staircase = 3;
			var ways = new List<int>() { 1, 2 };
			while (staircase <= n)
			{
				ways.Add(ways[staircase - 3] + ways[staircase - 2]);
				staircase++;
			}
			return ways[n - 1];
		}
	}
}


