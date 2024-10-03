/**
 * 216. 组合总和 III
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
 * 只使用数字1到9
 * 每个数字 最多使用一次 
 * 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const res = [];

    function backTracking(k, n, sum, startIndex, tempArr) {
        if (sum > n) return;
        if (tempArr.length === k) {
            if (sum === n) {
                res.push(tempArr.slice());
            }
            return;
        } else {
            for (let i = startIndex; i <= 9 - (k - tempArr.length) + 1; i++) {
                tempArr.push(i);
                backTracking(k, n, sum + i, i + 1, tempArr);
                tempArr.pop();
            }
        }
    }
    backTracking(k, n, 0, 1, []);
    return res;
};
console.log(combinationSum3(3, 7));