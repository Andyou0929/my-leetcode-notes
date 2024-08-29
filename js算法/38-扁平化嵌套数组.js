/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n <= 0) return arr
    let res = []
    /* arr.forEach(item=>{
        if (item instanceof Array) {
            res.concat(...flat(item,n-1))
        }else{
            res.push(item)
        }
    })
    return res */
    return [].concat(...arr.map(item => (Array.isArray(item) ? flat(item, n - 1): item)))
};

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],0)); // [ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11 ], 12 ], [ 13, 14, 15 ] ]
console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ], 12, 13, 14, 15 ]
console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]],2)); 
/* [
    1,  2,  3,  4,  5,  6,
    7,  8,  9, 10, 11, 12,
   13, 14, 15
 ] */
console.log(flat([[1,2],[3,[4,[5,[6]]],7],[8,9,10]],3)); 