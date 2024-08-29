/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let argMap = new Map()
    let resMap = new Map()
    let id = 0
    return function(...args) {
        let key = ""
        for(let item of args) {
            if(!argMap.has(item)) argMap.set(item, ++id)
            key += argMap.get(item) + '-'
        }
        console.log(argMap);
        if(resMap.has(key)) return resMap.get(key)
        let res = fn(...args)
        resMap.set(key, res)
        console.log(resMap);
        return res
    }

}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return ({
        ...a,
        ...b
    });
})
console.log(memoizedFn({}, {})); // 5
console.log(callCount)
console.log(memoizedFn({}, {})); // 5
console.log(callCount)
console.log(memoizedFn({}, {}));
console.log(callCount) // 1 