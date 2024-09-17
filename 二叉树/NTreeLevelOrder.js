/**
 * 429. N 叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 * 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function _Node(val,children) {
    this.val = val;
    this.children = children;
};
/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    const ans = [];
    while (queue.length) {
        const length = queue.length;
        const level = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node?.val);
            if (node?.children.length) {
                for (const child of node.children) {
                    queue.push(child);
                }
            }
        }
        ans.push(level);
    }
    return ans;
};