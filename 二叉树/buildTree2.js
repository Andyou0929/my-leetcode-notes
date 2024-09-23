/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!inorder.length) return null;
    const rootVal = preorder.shift();
    const index = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(0,index),inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index),inorder.slice(index+1));
    return root;
};