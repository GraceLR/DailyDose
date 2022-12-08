using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyDoseCSharp
{
	public class CustomNode
	{
		public string Title;
		public CustomNode Parent;
		public List<CustomNode> Children = new List<CustomNode>();

		public CustomNode(string title, CustomNode parent)
		{
			Title = title;
			Parent = parent;

			if (parent != null)
			{
				Parent.Children.Add(this);
			}
		}

		public void FindAllByTitleExceptTarget(CustomNode target, HashSet<CustomNode> set)
		{
			if (Title == target.Title && this != target)
			{
				set.Add(this);
			}

			foreach (var child in Children)
			{
				child.FindAllByTitleExceptTarget(target, set);
			}
		}

		public CustomNode Find(string path)
		{
			if (path == Title)
			{
				return this;
			}

			string[] pieces = path.Split(new char[] { '/' });
			foreach (var child in Children)
			{
				if (child.Title == pieces[1])
				{
					return child.Find(path.Remove(0, Title.Length + 1));
				}
			}

			return null;
		}
	}


	public static class GetShortestUniqueQualifier
	{
		public static string Func(CustomNode root, CustomNode target)
		{
			if (root == null || target == null)
			{
				throw new Exception("root and target must be defined");
			}

			var nodeSet = new HashSet<CustomNode>();
			root.FindAllByTitleExceptTarget(target, nodeSet);

			var currentTarget = target;
			var shortestQualifier = currentTarget.Title;

			while (nodeSet.Count() > 0 && currentTarget.Parent != null)
			{
				currentTarget = target.Parent;
				shortestQualifier = currentTarget.Title + "/" + shortestQualifier;

				var nextNodeSet = new HashSet<CustomNode>();
				foreach (var node in nodeSet)
				{
					var parent = node.Parent;
					if (parent != null && parent.Title == currentTarget.Title)
					{
						nextNodeSet.Add(parent);
					}
				}
				nodeSet = nextNodeSet;
			}

			if (currentTarget.Parent == null && nodeSet.Any())
			{
				return "/" + shortestQualifier;
			}
			else
			{
				return shortestQualifier;
			}
		}
	}
}
