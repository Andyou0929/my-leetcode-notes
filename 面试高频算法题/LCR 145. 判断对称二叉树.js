/**
 * LCR 145. 判断对称二叉树
 * 请设计一个函数判断一棵二叉树是否 轴对称 。
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
var checkSymmetricTree = function (root) {
    if (!root) return false;

    function compaer(left, right) {
        if (!left && right) return false;
        if (!right && left) return false;
        if (!left && !right) return true;
        if (left.val !== right.val) return false;
        return compaer(left.left, left.right) && compaer(right.left, right.right);
    }
    return compaer(root.left, root.right);

};