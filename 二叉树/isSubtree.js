/**
 * 572. 另一棵树的子树
 * 给你两棵二叉树 root 和 subRoot 。
 * 检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。
 * 如果存在，返回 true ；否则，返回 false 。
 * 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// 先找到相同节点，将两个节点进行比较
var isSubtree = function (root, subRoot) {
    if (!root) return false;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node.val === subRoot.val) {
            root = node;
            break;
        }
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    if (root.val !== subRoot.val) return false;
    const compare = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        return compare(p.left, q.left) && compare(p.right, q.right);
    }
    return compare(root, subRoot);
};

//递归root节点
var isSubtree1 = function (root, subRoot) {
    if (!root) return false;
    
    // 同时判断两个树是否相等
    if (compare(root, subRoot)) {
        return true;
    }
    // 不相等递归判读左子树和右子树是否有和subRoot相等的，其一有相等就return true
    return isSubtree1(root.left, subRoot) || isSubtree1(root.right, subRoot);
}
const compare = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return compare(p.left, q.left) && compare(p.right, q.right);
}