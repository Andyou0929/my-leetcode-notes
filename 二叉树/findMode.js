/**
 * 501. 二叉搜索树中的众数
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 * 假定 BST 满足如下定义：
 * 结点左子树中所含节点的值 小于等于 当前节点的值
 * 结点右子树中所含节点的值 大于等于 当前节点的值
 * 左子树和右子树都是二叉搜索树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 中序遍历 + hash
var findMode = function(root) {
    const getBSTNodes = (node)=>{
        return node ? [
            ...getBSTNodes(node.left),
            node.val,
            ...getBSTNodes(node.right),
        ] : [];
    }
    // 得出tree的中序遍历结果
    const nodeArr = getBSTNodes(root);
    // hash记录每个值出现的次数
    const map = nodeArr.reduce((pre,cur)=>{
        if(!pre[cur]){
            pre[cur] = 0;
        }
        pre[cur]++;
        return pre;
    },{});
    const ans = [];
    // 计算出现次数最多的节点
    const max = Object.values(map).reduce((pre,cur)=>Math.max(pre,cur));
    // 将出现次数的节点push到ans中
    for (const key in map) {
        if(map[key] === max) ans.push(+key);
    }
    return ans
};

// 递归思路
var findMode1 = function(root){
    // 记录上一个节点
    let pre = null;
    // 记录当前节点出现次数
    let count = 0;
    // 记录出现相同节点最多次数
    let maxCount = 0;
    // 结果集
    let ans = [];
    // 中序遍历递归
    const traversal = (cur)=>{
        // 如果当前节点为空直接return
        if(cur === null) return;
        // 先递归左子节点
        traversal(cur.left);
        // 如果上个节点为null，count重计
        if(pre === null) count = 1;
        // 当前节点等下上个节点count++
        else if(pre.val === cur.val) count++;
        // 不相等，重新计数
        else count = 1;
        // 记录当前节点
        pre = cur;
        // 如果当前节点出现的次数等于最大出现次数，将当前节点的值push到结果集
        if(count === maxCount) ans.push(cur.val);
        // 当前节点出现的次数大于记录重复节点出现的次数
        else if(count > maxCount) {
            // 结果集赋值为空
            ans = []
            // 最大重复次数记录为，当前节点出现次数
            maxCount = count;
            // 将当前节点值push到结果集和
            ans.push(cur.val);
        }
        // 递归右子节点
        traversal(cur.right);
    }
    traversal(root);
    return ans;
}