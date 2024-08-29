function minSubArrayLen(target, nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= target) {
                let len = j - i + 1
                res = res == 0 ? len : Math.min(res, len)
                break;
            }
        }
    }
    return res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));