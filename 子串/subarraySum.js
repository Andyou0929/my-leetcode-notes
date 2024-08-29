/**
 * 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1、暴力法
var subarraySum1 = function(nums, k) {
    let count = 0;
    // 循环数组
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        // 从当前下标循环到数组头部
        for (let j = i; j >= 0; j--) {
            // 从当前下标到数组头部的和
            sum += nums[j];
            // 如果和等于k,count+1
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};
// 前缀和+哈希表
var subarraySum2 = function(nums, k) {
    let pre = 0;
    // 创建哈希表
    let map = new Map();
    let count = 0;
    // 存放(0,1),会出现前缀和等于k
    map.set(0,1)
    for (let i = 0; i < nums.length; i++) {
        // 计算前缀和
        pre+=nums[i];
        // 如果前缀和-k存在哈希表中,则说明和为k
        if (map.has(pre - k)) {
            count+=map.get(pre - k);
            
        }
        if (map.has(pre)) {
            map.set(pre,map.get(pre) + 1);
        }else{
            map.set(pre,1)
        }
        console.log(map);
    }
    return count;
};
console.log(subarraySum2([1,2,3],3));