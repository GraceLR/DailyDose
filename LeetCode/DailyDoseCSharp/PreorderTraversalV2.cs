public class Solution {
    public IList<int> PreorderTraversal(TreeNode root) {
        var preorderTraversal = new List<int>();
        Travel(root, preorderTraversal);
        return preorderTraversal;
    }

    private void Travel(TreeNode node, List<int> preorderTraversal) {
        if (node == null)
        {
            return;
        }
        preorderTraversal.Add(node.val);
        Travel(node.left, preorderTraversal);
        Travel(node.right, preorderTraversal);
    }
}