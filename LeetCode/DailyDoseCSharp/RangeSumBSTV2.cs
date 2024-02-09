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
            if (node.val < low)
            {
                return RangeSum(node.right);
            } else if (node.val > high)
            {
                return RangeSum(node.left);
            }
            else
            {
                return node.val + RangeSum(node.left) + RangeSum(node.right);
            }
        }
        return RangeSum(root);
    }
}
