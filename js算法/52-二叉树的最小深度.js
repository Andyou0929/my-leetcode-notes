function minDepth(root) {
    // 补充代码
    if (root == null)
        return 0;
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    return (left < right ? left : right) + 1
}
let root = {
    val: 1,
    left: {
      val: 2,
      left:{
        val: 3,
        right: {
          val: 4
        }
      }
    },
  }
console.log(minDepth(root));