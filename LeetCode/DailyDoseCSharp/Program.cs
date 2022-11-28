namespace DailyDoseCSharp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var root = new CustomNode("Root", null);
            var userdata = new CustomNode("UserData", root);
            var browser = new CustomNode("Browser", userdata);
            var word = new CustomNode("Word", userdata);
            var priv = new CustomNode("Private", userdata);
            var word2 = new CustomNode("Word", priv);

            var windows = new CustomNode("Windows", root);
            var system = new CustomNode("System", root);
            var programs = new CustomNode("Programs", root);
            var notepad = new CustomNode("Nodepad", programs);
            var word3 = new CustomNode("Word", programs);
            var browser2 = new CustomNode("Browser", programs);

			var root2 = new CustomNode("Root", root);
			var root3 = new CustomNode("Root2", root2);
			var root4 = new CustomNode("Root", root3);


			Console.WriteLine(GetShortestUniqueQualifier.Func(root, root2));
        }
    }
}