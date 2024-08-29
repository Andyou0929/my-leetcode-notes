function searchInsert(nums, target) {
    if (nums[0] >= target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    for (let i = 0, j = 1; i < nums.length; i++, j++) {
        if (nums[i] <= target && nums[j] >= target) {
            return j
        }
    }
}

console.log(searchInsert([1, 3, 5, 6],5));
console.log(searchInsert([1, 3, 5, 6],2));
console.log(searchInsert([1, 3, 5, 6],7));
console.log(searchInsert([6, 8, 10, 12],7));