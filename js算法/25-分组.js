/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    this.forEach(item=>{
        let key = fn(item)
        if(!obj[key]) obj[key] = []
        obj[key].push(item)
    })
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
console.log([1,2,3].groupBy(String));
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const fn = function (n) { 
    return String(n > 5);
  }
console.log(arr.groupBy(fn));