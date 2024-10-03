/**
 * 103. 二叉树的锯齿形层序遍历
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 层序遍历，并根据奇偶判断是否反转某一层
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    let isReverse = 1;
    const res = [];
    while (queue.length) {
        const level = [];
        const length = queue.length;
            for (let i = 0; i < length; i++) {
                const node = queue.shift();
                if(isReverse % 2 !== 0){
                    level.push(node);
                }else{
                    level.unshift(node);
                }
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
        }
        isReverse++;
        res.push(level);
    }
    return res;
};