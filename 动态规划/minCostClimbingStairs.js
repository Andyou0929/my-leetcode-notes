/**
 * 746. 使用最小花费爬楼梯
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 1. 确定dp数组及下标的含义 下标i:台阶数 ;dp[i] 每个台阶花费的最小费用
    // 2. 递推公式,dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2]);
    // 3. 初始化dp数组,第一次跨台阶1步或2步是不需要花费费用的
    const dp = [0,0];
    // 4. 遍历顺序
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1],dp[i - 2] + cost[i - 2]);
    }
    return dp[cost.length]
};  

console.log(minCostClimbingStairs([10,15,20]));