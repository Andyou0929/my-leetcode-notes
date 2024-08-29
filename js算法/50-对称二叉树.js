function isSymmetric(root) {
    // 补充代码
    // 如果根节点为null返回false
    if (root == null) return false;
    // 辅助函数
    function isEquls(p, q) {
        // 相等返回false
      if (p.val == q.val) {
        return true;
      } else if (
        // 如果左子节点或者右子节点的值是否不为空
        (p.val == null && q.val != null) ||
        (q.val == null && p.val != null)
      ) {
        return false;
        // 左子节点值与右子节点值不相等
      } else if (p.val != q.val) {
        return false;
      }
      // 递归左右子节点的子节点
      return isEquls(p.left, q.right) && isEquls(p.right, q.left);
    }
    return isEquls(root.left,root.right)
  }
  
  module.exports = isSymmetric;
  