/**
 * 257. 二叉树的所有路径
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if(!root) return [];
    const ans = [];
    const searchPath = (node,curPath)=>{
        // 当节点无左右节点结束递归
        if(!node.left && !node.right) {
            curPath += node.val;
            ans.push(curPath);
            return;
        }
        curPath += node.val + "->";
        node.left && searchPath(node.left,curPath);
        node.right && searchPath(node.right,curPath);
    }
    searchPath(root,"");
    return ans;
};