/**
 * 199. 二叉树的右视图
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 每一层节点的最后一项，为从右边看到的节点
var rightSideView = function(root) {
    if (!root) return [];
    const queue = [root];
    const ans = [];
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (i === length - 1) {
                ans.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return ans;
};