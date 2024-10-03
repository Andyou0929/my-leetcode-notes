/**
 * 343. 整数拆分
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 * 返回 你可以获得的最大乘积 。
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 1. 确定dp数组及小标的含义 dp[i]：表示数字为i的可拆分的乘积最大
    // 2. 递推公式 dp[i] = Math.max(j * (i - j),j * dp[i - j],dp[i]);
    // 3. 初始化dp数组；
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    // 4. 遍历顺序
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(j * (i - j),j * dp[i - j],dp[i]);
        }
    }
    return dp[n];
};
console.log(integerBreak(10));