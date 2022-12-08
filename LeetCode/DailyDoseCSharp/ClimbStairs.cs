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
			var queue = new Stack<int>();
			queue.Push(n);
			
			var steps = new int[] { 2, 1 };
			var ways = 0;
	
			while (queue.Any())
			{
				int currentN = queue.Pop();

				if (currentN == 0)
				{
					ways += 1;
				}
				else if (currentN > 0)
				{
					foreach (var step in steps)
					{
						queue.Push(currentN - step);
					}
				}
			}

			return ways;
		}
	}
}


