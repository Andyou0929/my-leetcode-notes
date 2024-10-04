/**
 * 120. 三角形最小路径和
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 
 * 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // 1. 确定dp数组及下标的含义：dp[i][j]到达每一个点的最小路径
    // 2. 递推公式：dp[i][j+1] = Math.min(dp[i-1][j+1],dp[i-1][j])+trangle[i][j];
    // 3. 初始化dp数组
    const len = triangle.length;
    const dp = new Array(len).fill(null).map(() => new Array(len + 1).fill(Infinity));
    dp[0][1] = triangle[0][0];
    // 4. 遍历顺序
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i + 1; j++) {
            dp[i][j + 1] = Math.min(dp[i - 1][j + 1], dp[i - 1][j]) + triangle[i][j]
        }
    }
    return Math.min(...dp[len - 1]);
};

console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]));