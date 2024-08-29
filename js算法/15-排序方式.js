/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    arr.sort((a,b)=>fn(a)-fn(b))
    return arr
};

let result = sortBy([5, 4, 1, 2, 3],(x) => x)
console.log(result);