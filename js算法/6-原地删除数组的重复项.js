function removeDuplicates(nums) {
    let flag = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[flag] = nums[i]
            flag++;
        }

    }
    nums.splice(flag, nums.length - flag)
    return flag
}

console.log(removeDuplicates([0, 0, 1, 2, 3, 3]));