using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class ListNode
	{
		public int val;
		public ListNode next;
		public ListNode(int x)
		{
			val = x;
			next = null;
		}
	}
	public class HasCycle
	{
		public static bool Solution(ListNode head)
		{
			var hashSet = new Dictionary<ListNode, bool>();
			ListNode current = head;
			while (current != null)
			{
				if (hashSet.ContainsKey(current))
				{
					return true;
				}
				hashSet.Add(current, true);
				current = current.next;
			}
			return false;
		}
	}
}


