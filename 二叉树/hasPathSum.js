/**
 * 112. 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    function getSum(node, val) {
        if (val === 0 && !node.left && !node.right) return true;
        if (!node.left && !node.right) return false;
        //如果当前节点有左子节点，并且左子节点下的路径可以减到0,则返回true
        if(node.left && getSum(node.left,val - node.left.val)) return true;
        //如果当前节点有右子节点，并且右子节点下的路径可以减到0,则返回true
        if(node.right && getSum(node.right,val - node.right.val)) return true;
        return false
    }
    return getSum(root, targetSum- root.val);
};