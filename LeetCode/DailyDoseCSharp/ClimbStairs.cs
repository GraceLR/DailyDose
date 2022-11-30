﻿using System;
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
			var queue = new Queue<int>();
			queue.Enqueue(n);
			
			var steps = new int[] { 2, 1 };
			var ways = 0;
	
			while (queue.Any())
			{
				int currentN = queue.Dequeue();

				if (currentN == 0)
				{
					ways += 1;
				}
				else if (currentN > 0)
				{
					foreach (var step in steps)
					{
						queue.Enqueue(currentN - step);
					}
				}
			}

			return ways;
		}
	}
}


