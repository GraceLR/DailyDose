using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class CountOdds
	{
		public static int Solution(int low, int high)
		{
			var num = ((high - low) / 2.0);
			int rem = low % 2 + high % 2;
			return (int)(num + rem / 2.0);
		}
	}
}


