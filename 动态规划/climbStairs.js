/**
 * 70. 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if(n <= 2) return n;
    // 1. 确定dp数组及其下标含义 下标为:台阶数量,dp[i]为:对应爬到的方法数量
    // 2. 递推公式 0-0 1-1 2-2 3-3 4-5 5-8   f(n) = f(n-1) + f(n-2);
    // 3.初始化dp
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    // 4.遍历顺序
    for (let i = 3; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.log(climbStairs(5));