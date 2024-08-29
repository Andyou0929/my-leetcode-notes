/**
 * 两数之和
 * 定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 创建hash表
    const map = new Map();
    // 循环数组
    for (let i = 0; i < nums.length; i++) {
        // 使用目标数减去当前下标指向的数
        let flag = target - nums[i];
        // 判断减去所得的数是否存在哈希表中
        if (map.has(flag)) {
            // 存在说明找到答案，之间返回哈希表存放的所指数字的下标和当前下标
            return [map.get(flag),i]
        }
        // 将当前数字,与对应数字的小标存放在哈希表
        map.set(nums[i],i);
    }
    return []
};
console.log(twoSum([3,2,4],6));
/**
 * 详细解法:
 * https://leetcode.cn/problems/two-sum/solutions/2326193/dong-hua-cong-liang-shu-zhi-he-zhong-wo-0yvmj/?envType=study-plan-v2&envId=top-100-liked
 */