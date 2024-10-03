/**
 * 63. 不同路径 II
 * 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
 * 返回机器人能够到达右下角的不同路径数量。
 * 测试用例保证答案小于等于 2 * 109。
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // 1. 确定dp代表的含义和下标代表的含义，dp[i][j]:到达每个路径的数量
    // 2. 递推公式：dp[i][j] = (obstacleGrid[i-1][j] === 1 ? 0 : dp[i][j - 1]) + (obstacleGrid[i][j - 1] === 1 ? 0 : dp[i - 1][j])
    // 3. 初始化dp数组
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) return 0;
    const dp = new Array(m).fill(null).map(item => new Array(n).fill(0));
    // 数组第一行与第一列都为1
    // 每一行的某个块到达的路径数量取决于上一块的路径是否可以到达
    dp[0][0] = 1;
    /* for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0;
        } else {
            dp[i][0] = dp[i - 1][0];
        }
    }
    for (let i = 1; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0;
        } else {
            dp[0][i] = dp[0][i - 1];
        }
    } */
    // 4. 遍历顺序
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else if (i == 0) dp[i][j] = dp[i][j - 1] == 0 ? 0 : 1
            else if (j == 0) dp[i][j] = dp[i - 1][j] == 0 ? 0 : 1
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }

        }
    }
    console.log(dp);
    return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0]
]));