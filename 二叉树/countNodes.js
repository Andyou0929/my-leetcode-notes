/**
 * 222. 完全二叉树的节点个数
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
若最底层为第 h 层，则该层包含 1~ 2h 个节点。
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
// 层序遍历
var countNodes = function(root) {
    if (!root) return 0;
    const queue = [root];
    let ans = 0;
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();  
            ans++;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);      
        }
    }
    return ans;
};
// 前序遍历
var countNodes1 = function(root) {
    if (!root) return 0;
    const stack = [root];
    let ans = 0;
    while(stack.length){
        const node = stack.pop();
        ans++;
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return ans;
};
// 中序遍历
var countNodes2 = function(root){
    if (!root) return 0;
    const stack = [];
    let cur = root;
    let ans = 0;
    while (cur !== null || stack.length) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }else{
            const node = stack.pop();
            ans++;
            cur = node.right;
        }
    }
    return ans;
}
// 递归遍历
var countNodes3 = function(root){
    if (!root) return 0;
    let ans = 0;
    function search(root) {
        ans++;
        root.left && search(root.left);
        root.right && search(root.right);
        return ans
    }
    return search(root);
}