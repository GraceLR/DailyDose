using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class Day5
	{
		public static List<char>[] transpose(string[] matrix)
		{
			int len = matrix[0].Length;
			var listMatrix = new List<char>[len];
			for (var i = 0; i < len; i++)
			{
				listMatrix[i] = new List<char>();
			}
			for (var i = 0; i < matrix.Length; i++)
			{
				for (var j = 0; j < len; j++)
				{
					var character = matrix[i][j];
					if (Char.IsLetter(character))
					{
						listMatrix[j].Add(character);
					}
				}
			}
			return listMatrix;
		}
		public static string Q1()
		{
			var stringMatrix = rawInputStack.Split(Environment.NewLine);
			var moves = rawInput.Split(Environment.NewLine, StringSplitOptions.RemoveEmptyEntries);
			var matrix = transpose(stringMatrix);
			foreach (var move in moves)
			{
				var moveArray = move.Split(" ");
				int from = Convert.ToInt32(moveArray[3]) - 1;
				int to = Convert.ToInt32(moveArray[5]) - 1;
				int ct = Convert.ToInt32(moveArray[1]);
				for (var i = 0; i < ct; i++)
				{
					char poped = matrix[from][0];
					matrix[to].Insert(0, poped);
					matrix[from].RemoveAt(0);
				}
			}
			string message = "";
			foreach (var arr in matrix)
			{
				message += arr[0];
			}
			return message;
		}


		public static int Q2()
		{
			return 0;
		}

		static string rawInputStack = @"     L HM
    JZJQQ
S   MCTFB
P H BDGBP
W LDDJWTC
NTRTTTMMG
JSQSZWPGD
ZGVVQMLNR";

		static string rawInput = @"move 1 from 3 to 5
move 2 from 2 to 8
move 4 from 1 to 3
move 2 from 1 to 4
move 1 from 7 to 1
move 2 from 9 to 7
move 4 from 5 to 9
move 7 from 8 to 9
move 2 from 5 to 2
move 1 from 2 to 9
move 1 from 1 to 8
move 1 from 2 to 7
move 3 from 8 to 2
move 6 from 9 to 7
move 5 from 4 to 1
move 7 from 9 to 5
move 1 from 4 to 5
move 4 from 1 to 7
move 1 from 8 to 1
move 4 from 7 to 9
move 1 from 5 to 8
move 9 from 9 to 3
move 1 from 8 to 9
move 1 from 1 to 5
move 4 from 3 to 2
move 10 from 5 to 3
move 8 from 2 to 8
move 7 from 8 to 3
move 9 from 7 to 5
move 1 from 9 to 3
move 3 from 6 to 4
move 3 from 7 to 6
move 1 from 8 to 7
move 1 from 1 to 8
move 1 from 4 to 7
move 5 from 7 to 6
move 14 from 3 to 7
move 16 from 3 to 9
move 1 from 8 to 4
move 2 from 4 to 9
move 1 from 3 to 7
move 1 from 6 to 8
move 15 from 7 to 2
move 10 from 9 to 7
move 7 from 2 to 4
move 1 from 2 to 7
move 11 from 6 to 7
move 5 from 5 to 9
move 15 from 7 to 8
move 1 from 7 to 2
move 2 from 9 to 7
move 4 from 5 to 1
move 5 from 4 to 9
move 6 from 2 to 4
move 2 from 2 to 5
move 2 from 1 to 4
move 1 from 1 to 5
move 3 from 5 to 6
move 8 from 7 to 9
move 9 from 4 to 9
move 1 from 4 to 8
move 11 from 9 to 7
move 4 from 6 to 1
move 17 from 8 to 7
move 26 from 7 to 1
move 1 from 4 to 8
move 24 from 1 to 7
move 22 from 9 to 3
move 1 from 8 to 2
move 6 from 3 to 4
move 2 from 1 to 2
move 1 from 7 to 9
move 16 from 7 to 3
move 1 from 9 to 5
move 6 from 4 to 1
move 1 from 2 to 7
move 6 from 3 to 2
move 1 from 5 to 4
move 6 from 3 to 5
move 1 from 4 to 1
move 3 from 1 to 4
move 4 from 5 to 4
move 7 from 1 to 7
move 6 from 4 to 3
move 1 from 1 to 6
move 1 from 2 to 5
move 1 from 1 to 7
move 15 from 3 to 1
move 2 from 2 to 7
move 3 from 5 to 8
move 9 from 7 to 5
move 8 from 5 to 7
move 3 from 8 to 5
move 1 from 6 to 9
move 5 from 7 to 8
move 3 from 2 to 4
move 2 from 2 to 5
move 4 from 3 to 7
move 5 from 8 to 3
move 1 from 5 to 8
move 5 from 3 to 1
move 2 from 5 to 7
move 1 from 9 to 8
move 1 from 5 to 8
move 19 from 1 to 4
move 19 from 7 to 1
move 7 from 1 to 4
move 1 from 7 to 4
move 3 from 3 to 5
move 22 from 4 to 5
move 3 from 8 to 3
move 7 from 1 to 8
move 3 from 3 to 5
move 3 from 3 to 6
move 3 from 6 to 9
move 3 from 9 to 1
move 1 from 3 to 4
move 2 from 8 to 9
move 25 from 5 to 6
move 4 from 1 to 5
move 5 from 5 to 4
move 2 from 8 to 2
move 1 from 9 to 2
move 3 from 5 to 7
move 12 from 6 to 8
move 1 from 7 to 3
move 7 from 8 to 1
move 1 from 5 to 7
move 1 from 3 to 8
move 2 from 7 to 4
move 6 from 8 to 5
move 10 from 6 to 3
move 2 from 6 to 2
move 1 from 6 to 3
move 17 from 4 to 6
move 3 from 3 to 9
move 3 from 8 to 4
move 1 from 7 to 5
move 1 from 3 to 8
move 1 from 2 to 5
move 10 from 1 to 7
move 3 from 2 to 7
move 2 from 1 to 8
move 15 from 6 to 3
move 7 from 5 to 9
move 9 from 9 to 5
move 1 from 9 to 3
move 2 from 3 to 5
move 3 from 8 to 6
move 1 from 9 to 3
move 11 from 5 to 8
move 9 from 3 to 8
move 1 from 5 to 6
move 9 from 8 to 5
move 10 from 7 to 5
move 5 from 5 to 3
move 4 from 6 to 8
move 2 from 6 to 8
move 2 from 5 to 6
move 1 from 2 to 1
move 9 from 5 to 3
move 2 from 7 to 5
move 3 from 5 to 4
move 1 from 4 to 1
move 2 from 4 to 3
move 1 from 7 to 1
move 2 from 1 to 7
move 3 from 4 to 5
move 2 from 7 to 3
move 14 from 3 to 9
move 13 from 3 to 1
move 8 from 1 to 4
move 6 from 1 to 2
move 11 from 8 to 6
move 4 from 3 to 9
move 2 from 9 to 2
move 1 from 5 to 2
move 6 from 4 to 9
move 6 from 8 to 9
move 6 from 9 to 4
move 2 from 4 to 7
move 4 from 4 to 6
move 4 from 2 to 9
move 2 from 7 to 9
move 2 from 2 to 1
move 3 from 5 to 3
move 2 from 1 to 7
move 1 from 5 to 2
move 7 from 9 to 7
move 2 from 2 to 8
move 10 from 6 to 5
move 5 from 5 to 6
move 9 from 7 to 8
move 3 from 3 to 9
move 4 from 5 to 1
move 10 from 9 to 3
move 7 from 6 to 2
move 5 from 3 to 9
move 3 from 1 to 7
move 1 from 4 to 7
move 1 from 4 to 9
move 1 from 3 to 7
move 1 from 2 to 1
move 1 from 5 to 1
move 1 from 1 to 7
move 3 from 6 to 3
move 3 from 3 to 4
move 6 from 7 to 4
move 3 from 9 to 8
move 9 from 8 to 1
move 3 from 8 to 1
move 13 from 9 to 5
move 2 from 2 to 8
move 4 from 8 to 3
move 11 from 1 to 2
move 14 from 2 to 6
move 6 from 3 to 8
move 4 from 9 to 7
move 10 from 5 to 3
move 2 from 7 to 3
move 1 from 1 to 8
move 1 from 1 to 7
move 1 from 7 to 8
move 1 from 1 to 4
move 8 from 4 to 2
move 2 from 5 to 1
move 1 from 1 to 9
move 1 from 7 to 3
move 1 from 9 to 5
move 1 from 4 to 2
move 1 from 4 to 6
move 1 from 7 to 3
move 11 from 6 to 9
move 4 from 2 to 5
move 4 from 2 to 5
move 10 from 5 to 6
move 9 from 9 to 5
move 1 from 9 to 2
move 2 from 8 to 4
move 1 from 9 to 6
move 5 from 2 to 1
move 5 from 8 to 6
move 4 from 1 to 9
move 1 from 8 to 1
move 3 from 9 to 4
move 5 from 5 to 1
move 1 from 9 to 7
move 11 from 6 to 3
move 4 from 4 to 9
move 9 from 6 to 5
move 2 from 6 to 5
move 3 from 9 to 1
move 1 from 4 to 8
move 4 from 1 to 3
move 3 from 5 to 4
move 2 from 4 to 9
move 2 from 9 to 4
move 1 from 9 to 8
move 6 from 5 to 4
move 1 from 7 to 8
move 3 from 5 to 2
move 3 from 8 to 5
move 1 from 2 to 1
move 24 from 3 to 9
move 2 from 2 to 1
move 10 from 1 to 7
move 18 from 9 to 8
move 5 from 3 to 7
move 5 from 9 to 5
move 12 from 7 to 2
move 1 from 7 to 6
move 8 from 4 to 7
move 1 from 4 to 5
move 12 from 5 to 9
move 1 from 6 to 9
move 3 from 2 to 8
move 5 from 7 to 3
move 21 from 8 to 7
move 3 from 3 to 8
move 11 from 9 to 5
move 10 from 5 to 6
move 3 from 7 to 2
move 3 from 6 to 4
move 2 from 3 to 1
move 2 from 3 to 5
move 1 from 1 to 7
move 1 from 1 to 4
move 3 from 4 to 1
move 1 from 9 to 1
move 1 from 4 to 3
move 3 from 5 to 8
move 1 from 9 to 6
move 4 from 2 to 3
move 6 from 8 to 6
move 1 from 9 to 3
move 7 from 2 to 4
move 5 from 4 to 5
move 1 from 2 to 6
move 3 from 1 to 9
move 3 from 9 to 4
move 1 from 1 to 9
move 2 from 5 to 3
move 3 from 5 to 2
move 4 from 7 to 2
move 2 from 4 to 3
move 2 from 2 to 3
move 2 from 4 to 8
move 5 from 2 to 3
move 6 from 6 to 4
move 8 from 7 to 3
move 4 from 4 to 5
move 1 from 3 to 1
move 2 from 8 to 6
move 7 from 7 to 5
move 1 from 9 to 1
move 14 from 3 to 6
move 4 from 7 to 1
move 6 from 5 to 3
move 4 from 1 to 2
move 9 from 3 to 5
move 1 from 7 to 2
move 2 from 3 to 7
move 1 from 4 to 8
move 1 from 4 to 9
move 3 from 3 to 6
move 9 from 5 to 2
move 1 from 8 to 9
move 1 from 1 to 7
move 1 from 9 to 3
move 1 from 4 to 8
move 1 from 9 to 4
move 3 from 5 to 1
move 2 from 1 to 9
move 1 from 4 to 9
move 15 from 6 to 9
move 3 from 3 to 5
move 2 from 1 to 3
move 2 from 7 to 4
move 5 from 6 to 5
move 6 from 2 to 9
move 1 from 7 to 2
move 2 from 4 to 6
move 2 from 3 to 1
move 1 from 1 to 6
move 1 from 8 to 3
move 1 from 3 to 9
move 3 from 5 to 1
move 3 from 6 to 2
move 6 from 5 to 3
move 6 from 6 to 8
move 4 from 1 to 6
move 12 from 9 to 7
move 4 from 6 to 8
move 1 from 5 to 1
move 2 from 8 to 2
move 2 from 2 to 1
move 5 from 3 to 6
move 3 from 1 to 6
move 5 from 8 to 6
move 1 from 3 to 6
move 5 from 2 to 7
move 8 from 9 to 4
move 15 from 7 to 8
move 5 from 6 to 3
move 1 from 3 to 8
move 15 from 8 to 3
move 7 from 2 to 9
move 1 from 7 to 4
move 10 from 9 to 5
move 4 from 6 to 4
move 3 from 8 to 6
move 1 from 8 to 6
move 1 from 7 to 3
move 10 from 6 to 9
move 7 from 3 to 2
move 10 from 9 to 7
move 8 from 5 to 7
move 8 from 3 to 7
move 1 from 5 to 9
move 1 from 6 to 8
move 1 from 5 to 4
move 1 from 8 to 6
move 5 from 3 to 8
move 9 from 4 to 2
move 1 from 9 to 2
move 4 from 2 to 3
move 2 from 2 to 9
move 2 from 4 to 8
move 4 from 9 to 1
move 1 from 4 to 9
move 1 from 7 to 8
move 9 from 2 to 1
move 1 from 2 to 5
move 1 from 5 to 3
move 1 from 9 to 3
move 4 from 3 to 6
move 4 from 8 to 9
move 2 from 3 to 6
move 2 from 6 to 9
move 1 from 4 to 8
move 3 from 6 to 3
move 2 from 6 to 5
move 1 from 5 to 2
move 2 from 2 to 1
move 9 from 7 to 3
move 7 from 3 to 9
move 9 from 9 to 8
move 10 from 7 to 1
move 3 from 9 to 3
move 3 from 3 to 1
move 5 from 8 to 3
move 1 from 9 to 3
move 1 from 5 to 6
move 3 from 8 to 4
move 1 from 8 to 4
move 2 from 8 to 2
move 7 from 3 to 8
move 4 from 4 to 2
move 1 from 4 to 6
move 1 from 8 to 1
move 5 from 7 to 5
move 2 from 6 to 7
move 3 from 8 to 7
move 2 from 2 to 1
move 23 from 1 to 6
move 2 from 3 to 5
move 1 from 3 to 6
move 1 from 7 to 2
move 22 from 6 to 4
move 5 from 2 to 7
move 6 from 5 to 3
move 17 from 4 to 1
move 5 from 8 to 2
move 23 from 1 to 7
move 5 from 3 to 1
move 15 from 7 to 2
move 2 from 3 to 4
move 1 from 8 to 4
move 5 from 1 to 9
move 6 from 7 to 1
move 8 from 4 to 6
move 4 from 9 to 5
move 3 from 5 to 7
move 1 from 9 to 1
move 7 from 7 to 4
move 7 from 1 to 5
move 10 from 2 to 3
move 4 from 2 to 4
move 6 from 2 to 8
move 7 from 6 to 7
move 7 from 3 to 1
move 3 from 6 to 2
move 5 from 8 to 7
move 7 from 5 to 7
move 1 from 5 to 6
move 1 from 6 to 2
move 2 from 3 to 4
move 1 from 3 to 7
move 1 from 2 to 6
move 3 from 7 to 6
move 1 from 8 to 3
move 4 from 4 to 2
move 2 from 4 to 9
move 2 from 1 to 7
move 1 from 4 to 9
move 1 from 3 to 5
move 4 from 6 to 1
move 3 from 4 to 5
move 2 from 4 to 1
move 8 from 7 to 1
move 1 from 4 to 1
move 6 from 2 to 3
move 1 from 2 to 4
move 4 from 3 to 2
move 1 from 4 to 5
move 3 from 2 to 5
move 11 from 7 to 5
move 2 from 9 to 1
move 8 from 7 to 4
move 2 from 3 to 5
move 1 from 2 to 1
move 8 from 4 to 1
move 1 from 9 to 4
move 7 from 5 to 4
move 22 from 1 to 5
move 5 from 4 to 2
move 6 from 1 to 7
move 4 from 2 to 7
move 19 from 5 to 4
move 1 from 7 to 6
move 3 from 1 to 6
move 3 from 7 to 9
move 1 from 2 to 4
move 20 from 4 to 6
move 13 from 5 to 9
move 2 from 1 to 3
move 10 from 9 to 8
move 3 from 9 to 4
move 1 from 8 to 1
move 1 from 1 to 8
move 1 from 3 to 1
move 2 from 9 to 2
";
	}
}
