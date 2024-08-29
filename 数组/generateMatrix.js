/**
 * 59. 螺旋矩阵 II
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX = 0,startY = 0;
    let loop = Math.floor(n/2);
    let mid = Math.floor(n/2);
    let offset = 1;
    let count = 1; 
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
    while (loop--) {
        let row = startX, col = startY;
        for (; col < n - offset; col++) {
            res[row][col] = count++;
        }
        for (; row < n - offset; row++) {
            res[row][col] = count++;
        }
        for (; col > startY; col--) {
            res[row][col] = count++;
        }
        for (; row > startX; row--) {
            res[row][col] = count++;
        }
        startX++;
        startY++;
        offset++;
    }
    if (n % 2 === 1) {
        res[mid][mid] = count;
    }
    return res;
};

console.log(generateMatrix(2));