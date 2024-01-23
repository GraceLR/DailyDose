public class Solution {
    public bool IsValid(string s) {
        var dictionary = new Dictionary<char, char>();
        dictionary.Add('(', ')');
        dictionary.Add('{', '}');
        dictionary.Add('[', ']');
        var openStack = new Stack<char>();
        foreach (char bracket in s)
        {
            if (dictionary.ContainsKey(bracket))
            {
                openStack.Push(bracket);
            }
            else if (openStack.Count != 0 && bracket == dictionary[openStack.Peek()])
            {
                openStack.Pop();
            }
            else
            {
                return false;
            }
        }
        return openStack.Count == 0;
    }
}