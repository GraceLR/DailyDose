/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int[] FindMode(TreeNode root) {
        var treeDictionary = new Dictionary<int, int>();
        void Travel(TreeNode node)
        {
            if (node == null)
            {
                return;
            }
            if (treeDictionary.ContainsKey(node.val))
            {
                treeDictionary[node.val]++;
            }
            else
            {
                treeDictionary.Add(node.val, 1);
            }
            Travel(node.left);
            Travel(node.right);
            return;
        }
        Travel(root);
        int modeOccurrence = treeDictionary.Values.Max();
        return treeDictionary.Where(node => node.Value == modeOccurrence).Select(node => node.Key).ToArray();
    }
}
