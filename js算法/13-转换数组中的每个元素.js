/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = []
    arr.forEach((item,index) => {
        res.push(fn(item,index))
    });
    return res
};

function plusone(n) { return n + 1}
const newArray = map([1,2,3], plusone);
console.log(newArray);