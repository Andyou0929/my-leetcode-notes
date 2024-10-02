/**
 * 236. 二叉树的最近公共祖先
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const travelTree = (root, p, q) => {
        if (root === null || root === p || root === q) {
            return root;
        }
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left != null && right != null){
            return root;
        }
        if(left){
            return right;
        }
        return right;
    }
    return travelTree(root,p,q);
};