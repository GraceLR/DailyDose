using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class PlusOne
	{
		public static int[] Solution(int[] digits)
		{
			int carry = 1;
			int len = digits.Length;
			var newDigits = new List<int>();
			for (var i = len - 1; i >= 0; i--)
			{
				int newDigit = digits[i] + carry;
				if (newDigit > 9)
				{
					newDigits.Insert(0, 0);
				}
				else
				{
					carry = 0;
					newDigits.Insert(0, newDigit);
				}
			}
			if (carry == 1)
			{
				newDigits.Insert(0, 1);
			}
			return newDigits.ToArray();
		}
	}
}


