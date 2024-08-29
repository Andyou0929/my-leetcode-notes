/**
 * 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    nums.sort((a,b)=>a-b);
    nums = Array.from(new Set(nums))
    let arr = [];
    let flag = [];
    for (let i = 0,j = i+1; i < nums.length; i++,j++) {
        if (nums[j] - nums[i] === 1) {
            flag.push(nums[i])
        }else{
            flag.push(nums[i]);
            arr.push(flag.length)
            flag = [];
        }
    }
    return Math.max(...arr)
};
console.log(longestConsecutive([1,2,0,1]))