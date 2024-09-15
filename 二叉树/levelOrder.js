/**
 * 102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 利用队列
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const ans = [];
    while (queue.length) {
        const level = [];
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node?.val);
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
        }
        ans.push(level);
    }
    return ans;
};