function threeSum(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    set.add(JSON.stringify([nums[i], nums[j], nums[k]].sort((a, b) => a - b)))
                }

            }

        }

    }
    let res = []
    set.forEach(item => {
        res.push(JSON.parse(item))
    })
    return res
}

console.log(threeSum([0]));