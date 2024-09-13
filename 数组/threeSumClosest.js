/**
 * 16. 最接近的三数之和
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 与三数之和思路相似
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    // 存储最接近target的数字
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let [left, right] = [i + 1, len - 1];
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // 如果当前三数之和减去target的绝对值小于，当前存储min减去target的绝对值，将min替换至当前sum
            if (Math.abs(sum - target) < Math.abs(min - target)) {
                min = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return min;
};
console.log(threeSumClosest([-1,2,1,-4],1));