/**200. 岛屿数量
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * @param {character[][]} grid
 * @return {number}
 */
// 使用dfs深度优先搜索
// 遇到陆地则计数，将周围所有陆地淹没
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                removeIsland(i, j, grid);
            }
        }
    }
    return count;
};

function removeIsland(i, j, grid) {
    // 处理边界
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
        return
    }
    grid[i][j] = "0";
    removeIsland(i, j + 1, grid);
    removeIsland(i, j - 1, grid);
    removeIsland(i + 1, j, grid);
    removeIsland(i - 1, j, grid);
}


console.log(numIslands([
    ["1", "0", "1", "1", "0", "1", "1"]
]));