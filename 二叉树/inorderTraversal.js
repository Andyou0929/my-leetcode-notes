/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
var inorderTraversal = function(root) {
    return root ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ] : [];
};
// 栈
var inorderTraversal1 = function(root){
    if (!root) return [];
    const stack = [];
    let cur = root;
    const ans = [];
    while (cur !== null || stack.length) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }else{
            const node = stack.pop();
            ans.push(node.val);
            cur = node.right;
        }
    }
    return ans;
}