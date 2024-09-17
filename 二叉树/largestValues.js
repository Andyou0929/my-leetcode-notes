/**
 * 515. 在每个树行中找最大值
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
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
var largestValues = function(root) {
    if(!root) return [];
    const queue = [root];
    const ans = [];
    while (queue.length) {
        const length = queue.length;
        let max = -Infinity;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            max = Math.max(max,node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        ans.push(max);
    }
    return ans;
};