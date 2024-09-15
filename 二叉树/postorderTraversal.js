/**
 * 145. 二叉树的后序遍历
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
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
// 递归法
var postorderTraversal = function(root) {
    return root ? [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val
    ] : [];
};
// 栈
var postorderTraversal1 = function(root){
    if (!root) return [];
    const stack = [root];
    const ans = [];
    while (stack.length) {
        const node = stack.pop();
        ans.push(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return ans.reverse();
}