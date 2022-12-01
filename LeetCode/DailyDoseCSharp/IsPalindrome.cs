using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class IsPalindrome
	{
		public static bool Solution(string s)
		{
			int i = 0;
			int j = s.Length - 1;
			while (i < j)
			{
				char iChar = s[i];
				char jChar = s[j];
				if (Char.IsLetterOrDigit(iChar) && Char.IsLetterOrDigit(jChar))
				{
					if (Char.ToLower(iChar) != Char.ToLower(jChar))
					{
						return false;
					}
					i++;
					j--;
				}
				else if (!Char.IsLetterOrDigit(iChar))
				{
					i++;
				}
				else
				{
					j--;
				}
			}
			return true;
		}
	}
}


