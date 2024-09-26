/**
 * 700. 二叉搜索树中的搜索
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
 * 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode | null}
 */
// 层序遍历
var searchBST = function (root, val) {
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.val === val) return node;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return null;
};

// 搜索树 - 递归
const searchBST1_1 = function (root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return searchBST(root.val > val ? root.left : root.right, val);
}

// 搜索树 - 迭代
const searchBST1_2 = function(root,val){
    while (root) {
        if(!root) return null;
        if(root.val === val) return root;
        root = (root.val > val ? root.left : root.right);
    }
    return root;
}