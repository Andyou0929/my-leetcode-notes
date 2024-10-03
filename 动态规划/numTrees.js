/**
 * 96. 不同的二叉搜索树
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 1. 确定dp数组及下标的含义 dp[i]表示i个节点组成二叉搜索树的数量
    // 2. 递推公式
    // 3. 初始化dp数组
    const dp = new Array(n + 1).fill(0);
    // 4. 确定遍历顺序
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = dp[j - 1] * dp[i - j];            
        }
    }
    return dp[n];
};