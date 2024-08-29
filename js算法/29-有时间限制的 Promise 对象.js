/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const arr = [
            await fn(...args),
            new Promise((resolve,reject)=>setTimeout(()=>reject("Time Limit Exceeded"),t))
        ]
        //Promise.race([]) 参数接收异步请求集合，返回最先结速的请求结果
        return Promise.race(arr)
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */