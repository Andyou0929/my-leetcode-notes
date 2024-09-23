/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 使用后续遍历的数组的最后一个元素分割中序遍历数组，左侧为左子树的节点，右侧为右子树的节点；
// 再次使用在根据分辨出的左右字数根据后续遍历的最后一个节点分割
var buildTree = function(inorder, postorder) {
    if(!inorder.length) return null;
    const rootVal = postorder.pop();
    const index = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0,index),postorder.slice(0,index));
    root.right = buildTree(inorder.slice(index + 1),postorder.slice(index));
    return root;
};