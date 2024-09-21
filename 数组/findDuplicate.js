/**
 * 287. 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 * @param {number[]} nums
 * @return {number}
 */
// 先排序，然后查相邻是否有相等
var findDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, j = 1; j < nums.length; i++, j++) {
        if (nums[i] === nums[j]) {
            return nums[i]
        }
    }
};
// 二分查找
var findDuplicate1 = function (nums) {
    let n = nums.length
    let l = 1,
        r = n - 1,
        ans = -1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let cnt = 0
        for (let i = 0; i < n; ++i) {
            cnt += +(nums[i] <= mid)
        }
        if (cnt <= mid) {
            l = mid + 1
        } else {
            r = mid - 1
            ans = mid
        }
    }
    return ans
};
console.log(findDuplicate1([1,3,4,2,3]));