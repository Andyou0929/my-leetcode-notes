/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = []
    for (let i = 0,j =1; i < arr.length; i+=size,j++) {
        res.push(arr.slice(i,size * j))
        
    }
    return res
};

console.log(chunk([8,5,3,2,6],6));