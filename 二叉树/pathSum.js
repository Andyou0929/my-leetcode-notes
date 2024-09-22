/**
 * 113. 路径总和 II
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let resPath = [],
        curpath = [];
    // 1. 确定递归函数参数
    const travelTree = function (node, count) {
        curpath.push(node.val);
        count -= node.val;
        if (node.left === null && node.right === null && count === 0) {
            resPath.push([...curpath]);
        }
        node.left && travelTree(node.left, count);
        node.right && travelTree(node.right, count);
        let cur = curpath.pop();
        count -= cur;
    }
    if (root === null) {
        return resPath;
    }
    travelTree(root, targetSum);
    return resPath;
};