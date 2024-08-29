/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr  = []
    arr.forEach((item,index)=>{
        if(fn(item,index)) filteredArr.push(item)
    })
return filteredArr
};
function greaterThan10(n,i) {return n + 1 }

let arr = filter([-2,-1,0,1,2],greaterThan10)
console.log(arr);