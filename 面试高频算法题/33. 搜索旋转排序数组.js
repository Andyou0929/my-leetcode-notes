/**
 * 33. 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 使用二分查询，根据target的值判断应该在那边查询
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < nums[r]){
            if(nums[mid] < target && target <= nums[r]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }else{
            if(nums[l] <= target && target < nums[mid]){
                r = mid - 1;
            }else{
                l = mid + 1;
            }
        }
    }
    return -1;
};
console.log(search([4,5,6,7,0,1,2],0));
console.log(search([4,5,6,7,0,1,2],3));
console.log(search([3,1],3));