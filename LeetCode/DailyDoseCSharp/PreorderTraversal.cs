public class Solution {
    public IList<int> PreorderTraversal(TreeNode root) {
        return Travel(root);
    }

    private List<int> Travel(TreeNode node) {
        var preorderTraversal = new List<int>();
        if (node != null)
        {
            IList<int> left = Travel(node.left);
            IList<int> right = Travel(node.right);
            preorderTraversal.Add(node.val);
            preorderTraversal.AddRange(left);
            preorderTraversal.AddRange(right);
        }
        return preorderTraversal;
    }
}
