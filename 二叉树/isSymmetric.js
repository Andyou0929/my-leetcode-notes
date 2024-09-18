// @ts-nocheck
/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
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
 * @return {boolean}
 */
// 判断每一层是否是对称的，但是有bug，无法判断可能有个节点没有左右孩子，197 / 199 个通过的测试用例
var isSymmetric = function (root) {
    if (!root) return false;
    function isSym(arr) {
        let i = 0,
            j = arr.length - 1;
        while (i <= j) {
            if (arr[i] !== arr[j]) return false;
            i++, j--;
        }
        return true;
    }
    const queue = [root];
    while (queue.length) {
        const length = queue.length;
        const level = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (!node.left) node.left = new TreeNode(Infinity);
            if (!node.right) node.right = new TreeNode(Infinity);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        if (!isSym(level)) return false;
    }
    return true;
};
// 递归 + 后续遍历
// 同时遍历两个树
var isSymmetric = function(root){
    if (!root) return false;
    function compaer(left,right) {
        if (!left && right) return false;
        if (left && !right) return false;
        if (!left && !right) return true;
        if(left.val !== right.val) return false;
        return compaer(left.left,right.right) && compaer(left.right,right.left);
    }
    return compaer(root.left,root.right);
}