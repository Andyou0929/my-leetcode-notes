/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let arr = []
        let count = 0;
        functions.forEach((item, i) => {
            item().then(res => {
                arr[i] = res
                if (++count === functions.length) {
                    resolve(arr)
                }
            }).catch(reject)
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]