/**
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 0 || nums.length === 1) return;
    let i = 0,j = i + 1;
    while(j<nums.length){
        let flag;
        if (nums[i] === 0 && nums[j] !== 0) {
            flag = nums[i];
            nums[i] = nums[j];
            nums[j] = flag;
            i++;
            
        }else if (nums[i] !== 0) {
            i++;
        }
        j++;
    }
};
let nums = [0,1,0,3,12,0,23,414,0,231,0];
moveZeroes(nums);
console.log(nums);