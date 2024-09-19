/**
 * 110. 平衡二叉树
 * 给定一个二叉树，判断它是否是 平衡二叉树
 * 平衡二叉树：该树所有节点的左右子树的深度相差不超过 1。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归+后续遍历，求左右子树高度相差是否为1
var isBalanced = function (root) {
    // 如果没根节点高度差为0 即返回true
    if(!root) return true;
    function getHeight(node) {
        // 如果没根节点高度差为0
        if(!node) return 0;
        // 递归计算左侧tree高度
        const leftHeight = getHeight(node.left);
        // 判断左侧tree高度是否为-1，为-1直接返回
        if (leftHeight === -1) return -1;
        // 递归计算右侧tree高度
        const rightHeight = getHeight(node.right);
        // 判断右侧tree高度是否为-1，为-1直接返回
        if(rightHeight === -1) return -1;
        // 判断左右tree高度差是否为大于1，大于1则返回-1；
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        // 否则返回当前节点的高度，为左右节点的高度的最大值加1
        else return (1 + Math.max(leftHeight,rightHeight));
    }
    return getHeight(root) !== -1
};
// 迭代法
var isBalanced1 = function (root) {

}