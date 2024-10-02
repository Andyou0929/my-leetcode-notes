/**
 * 46. 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路：回溯法
var permute = function (nums) {
    const result = [];
    function backtrack(subArr, remaining) {
        if (remaining.length === 0) {
            result.push(subArr.slice());
        } else {
            for (let i = 0; i < remaining.length; i++) {
                subArr.push(remaining[i]);
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                backtrack(subArr, newRemaining);
                subArr.pop();
            }
        }
    }
    backtrack([], nums)
    return result;
};

console.log(permute([1, 2, 3]));