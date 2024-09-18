/**
 * 226. 翻转二叉树
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 层序遍历，反转树
var invertTree = function(root) {
    if(!root) return root;
    const queue = [root];
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
             const node = queue.shift();
             [node.right,node.left] = [node.left,node.right];
             node.left && queue.push(node.left);
             node.right && queue.push(node.right);
        }
    }
    return root;
};
// 递归法
var invertTree1 = function(root){
    const inorder = (root)=>{
        if (!root) return root;
        [root.right,root.left] = [root.left,root.right];
        inorder(root.left);
        inorder(root.right);
    }
    inorder(root);
    return root;

}