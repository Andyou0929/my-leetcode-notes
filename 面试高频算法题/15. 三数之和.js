/**
 * 15. 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let j = i + 1,
            k = len - 1;
        while (j < k) {
            const arr = [nums[i], nums[j], nums[k]];
            const sum = arr.reduce((pre, cur) => pre + cur);
            if (sum === 0) {
                ans.push(arr);
                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }
                j++, k--;
            }
            if (sum > 0) {
                k--;
            }
            if (sum < 0) {
                j++;
            }
        }
    }
    return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));