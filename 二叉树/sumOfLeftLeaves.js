/**
 * 404. 左叶子之和
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 标记 + 递归
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;
    let ans = 0;
    // 查找左叶子节点
    function getLeft(node,isLeft) {
        if(!node) return;
        // 判断当前节点是否为左叶子节点，isLeft为true，并且没有做叶子和右叶子
        if(isLeft && !node.left && !node.right) ans+= node.val;
        node.left && getLeft(node.left,true);
        node.right && getLeft(node.right);
    }
    getLeft(root);
    return ans;
};

// 迭代法 
var sumOfLeftLeaves1 = function (root) {
    if (!root) return 0;
    let ans = 0;
    const stack = [{isLeft:false,node:root}];
    while (stack.length) {
        const o = stack.pop();
        if (o?.isLeft && !o.node.left && !o.node.right) {
            ans+= o.node.val;
        }
        o?.node.left && stack.push({isLeft:true,node:o.node.left})
        o?.node.right && stack.push({isLeft:false,node:o.node.right})
    }
    return ans;
};
