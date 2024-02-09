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
    public int RangeSumBST(TreeNode root, int low, int high) {
        int RangeSum(TreeNode node) {
            if (node == null)
            {
                return 0;
            }
            return (node.val <= high && node.val >= low ? node.val : 0) + RangeSum(node.left) + RangeSum(node.right);
        }
        return RangeSum(root);
    }
}
