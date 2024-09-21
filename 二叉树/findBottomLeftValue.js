/**
 * 513. 找树左下角的值
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 * 假设二叉树中至少有一个节点。
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
// 使用层序遍历，最后一层的最左侧节点为树的左下角值
var findBottomLeftValue = function(root) {
    const queue = [root];
    let ans = 0;
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (i === 0) {
                ans = node.val;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return ans;
};
// 递归,找到最大深度的叶子节点
var findBottomLeftValue1 = function(root) {
    let ans = 0,deep = 0;
    function getLeft(node,curDeep){
        // 前序遍历，遍历到每一层的第一个节点一定是最左侧的，所有只需判断最深处的第一个大于即可
        if (curDeep > deep) {
            deep = curDeep;
            ans = node.val;
        }
        node.left && getLeft(node.left,curDeep + 1);
        node.right && getLeft(node.right,curDeep + 1);
    }
    getLeft(root,1);
    return ans;
};