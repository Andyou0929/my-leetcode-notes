/**
 * 111. 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) {
                return depth;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        depth++;
    }
    return depth;
};