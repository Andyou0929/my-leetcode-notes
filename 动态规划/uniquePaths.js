/**
 * 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // 1. 确定dp代表的含义和下标代表的含义 dp[i][j]代表i,j位置路径数量
    const dp = new Array(m).fill(null).map(item => new Array(n).fill(0));
    // 3. 初始化dp数组，第一行与第一列到达的路径数量只有1个
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    // 4. 遍历顺序
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 2. 递推公式
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1]

};
console.log(uniquePaths(3, 2));