/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.forEach(item=>{
        init = fn(init,item)
    })
    return init
};

function sum(accum, curr) { return accum + curr; }
const res = reduce([1,2,3,4],sum,0)
console.log(res);