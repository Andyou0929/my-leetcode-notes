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
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                const JArr = JSON.stringify([nums[i], nums[j], nums[k]].sort());
                if (!ans.includes(JArr)) {
                    ans.push(JArr);
                }
                j++;
                k--;
            }
            if (sum > 0) {
                k--;
            }
            if (sum < 0) {
                j++;
            }
        }
    }
    return ans.map(JSON.parse);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));