/*
  @param {Function} fn
  @return {Function}
 */
function memoize(fn) {
    let map = new Map()
    return function(...args) {
        let item = args.join(",")
        if (!map.has(item)) {
            map.set(item,fn(...args))
        }
        return map.get(item)
    }
}


 
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
 console.log( memoizedFn(2, 3)); // 5
 console.log( memoizedFn(2, 3)); // 5
  console.log(callCount) // 1 
