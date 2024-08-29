/**
 * 209. 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的子数组
  * [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 双指针 滑动窗口
var minSubArrayLen = function(target, nums) {
    // 定义窗口头指针
    let start = 0
    // 定义窗口尾指针
    let end = 0;
    // 窗口中所以值得和
    let sum = 0;
    // nums数组得长度
    let len = nums.length;
    // 最小子序列长度，假设无穷大
    let ans = Infinity;
    // 循环结束条件窗口尾指针到达数组尾
    while(end < len){
        // 计算窗口内的和
        sum += nums[end];
        // 当窗口内数组的和大于等于target目标直时开启循环
        while (sum >= target) {
            // 统计最小长度子序列，窗口尾-窗口头 + 1
            ans = Math.min(ans,end - start + 1);
            // 窗口头依次减去
            sum -= nums[start];
            // 移动窗口头指针
            start++
        }
        // 尾指针++
        end++;
    }
    // 如果最小值依旧是无穷大，则说明没有数组所以数之和都不满足条件
    return ans === Infinity ? 0 : ans
};
console.log(minSubArrayLen(7,[2,3,1,2,4,3]));