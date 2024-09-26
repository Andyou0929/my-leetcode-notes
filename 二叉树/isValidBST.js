/**
 * 98. 验证二叉搜索树
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效 二叉搜索树定义如下：
 * 节点的左子树
 * 只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历出数组，判断数组是否有序
var isValidBST = function (root) {
    let nodeArr = null;
    function getNode(node) {
        return node ? [
            ...getNode(node.left),
            node.val,
            ...getNode(node.right)
        ] : [];
    }
    nodeArr = getNode(root);
    for (let i = 1; i < nodeArr.length; i++) {
        if(nodeArr[0] > nodeArr[i]) return false;
    }
    return true;
};

// 递归
var isValidBST1 = function(root){
    function traversal(root,pre){
        if(!root) return true;
        if(!traversal(root.left,pre)) return false;
        if(pre.val !== null && root.val <= pre.val) return false;
        pre.val = root.val;
        return traversal(root.right,pre);
    }
    return traversal(root,{val:null});
}