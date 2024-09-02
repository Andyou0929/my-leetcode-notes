/**
 * 349. 两个数组的交集
 * 给定两个数组 nums1 和 nums2，返回它们的交集
 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 暴力
var intersection = function(nums1, nums2) {
    let arr = [];
    nums1.forEach(item=>{
        if (nums2.includes(item)) {
            arr.push(item);
        }
    })
    return Array.from(...[new Set(arr)]);
};
// hash
var intersection1 = function(nums1, nums2) {
    let set = new Set();
    let ans = [];
    // 将数组存入hash
    for (const item of nums1) {
        if (set.has(item)) continue;
        set.add(item);
    }
    for (const item of nums2) {
    // 判断hash中是否存在当前值
        if (set.has(item)) {
            ans.push(item);
            set.delete(item);
        }
    }
    return ans;
};
console.log(intersection1([1,2,2,1],[2,2]));
console.log(intersection1([4,9,5],[9,4,9,8,4]));