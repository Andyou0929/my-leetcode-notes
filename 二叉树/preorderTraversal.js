/**
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
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
 * @return {number[]}
 */
// 递归
var preorderTraversal = function(root) {
    return root ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ] : [];
};
// 栈
var preorderTraversal1 = function(root){
    if (!root) return [];
    const stack = [];
    const ans = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        ans.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return ans;
}