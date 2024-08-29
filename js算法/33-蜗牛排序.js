/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    let nums = this
    if ((rowsCount * colsCount) !== nums.length) return []
    if (rowsCount === 1) return [this]
    let flag = false
    let res = []
    for (let i = 0; i < rowsCount; i++)
        res.push([])

    for (let i = 0; i < nums.length; i++) {
        let remainder = i % rowsCount
        if (remainder === 0) {
            flag = !flag
        }
        const index = flag ? remainder : Math.abs(remainder - (rowsCount - 1))
        res[index].push(nums[i])
        
    }
    return res
    
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5, 4));

// [
//     [ 19, 17, 16, 15 ],
//     [ 10, 1, 14, 4 ],
//     [ 3, 2, 12, 20 ],
//     [ 7, 5, 18, 11 ],
//     [ 9, 8, 6, 13 ]
// ]
const arr1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
console.log(arr1.snail(7, 5));
  