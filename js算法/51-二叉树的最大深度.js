function maxDepth(root) {
    // 补充代码
    if (!root) return 0
    else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right)
        return ((left > right) ? left : right) + 1
    }
}
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 7,
            },
            right: {
                val: 8
            }
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 5,
        left: {
            val: 6,
        }
    }
}
console.log(maxDepth(root));