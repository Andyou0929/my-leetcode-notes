/**
 * 107. 二叉树的层序遍历 II
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 层序遍历，只是结果反转
var levelOrderBottom = function(root) {
    if (!root) return [];
    const queue = [root];
    const ans = [];
    while (queue.length) {
        const length = queue.length;
        const level = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node?.val);
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
        }
        ans.unshift(level);
    }
    return ans;
};