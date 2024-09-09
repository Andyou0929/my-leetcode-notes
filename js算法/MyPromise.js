/**
 * 手写Promise
 */
const PEDDING = "pedding";
const FULLFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
    #state = "pedding";
    #result = undefined;
    #handlers = [];
    /**
     * 构造函数，用于创建一个Promise实例
     * @param {Function} executor 执行函数，接受resolve和reject两个参数
     */
    constructor(executor) {
        const resolve = (val) => {
            this._changeState(FULLFILLED, val);
        };
        const reject = (reason) => {
            this._changeState(REJECTED, reason)
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }
    /**
     * 改变Promise的状态，并执行相关的回调函数
     * @param {String} state 新的状态
     * @param {any} result 可以是任何值，用于传递给回调函数
     */
    _changeState(state, result) {
        if (this.#state !== PEDDING) return;
        this.#state = state;
        this.#result = result;
        this._run();
    }
    /**
     * 判断给定的值是否是一个Promise对象
     * @param {any} data 要判断的值
     * @returns {Boolean} 表示是否为Promise对象
     */
    _isPromise(data){
        return false;
    }
    /**
     * 使用微任务的方式执行给定的函数
     * @param {Function} fun 要执行的函数
     */
    _runMicroTask(fun){
        setTimeout(fun,0);
    }
    /**
     * 执行一次回调函数，并处理结果
     * @param {Function} callBack 回调函数
     * @param {Function} resolve 解析Promise的函数
     * @param {Function} reject 拒绝Promise的函数
     */
    _runOnce(callBack, resolve, reject) {
        this._runMicroTask(()=>{
            if (typeof callBack !== "function") {
                const settled = this.#state === FULLFILLED ? resolve : reject;
                settled(this.#result);
                return
            } else {
                try {
                    const data = callBack(this.#result);
                    if(this._isPromise(data)){
                        data.then(resolve,reject);
                    }else{
                        resolve(data);
                    }
                } catch (err) {
                    reject(err);
                }
            }
        })
    }
    /**
     * 执行Promise的回调函数队列
     */
    _run() {
        if (this.#state === PEDDING) return;
        while (this.#handlers.length) {
            const {
                onfulfilled,
                onrejected,
                resolve,
                reject
            } = this.#handlers.shift();
            if (this.#state === FULLFILLED) {
                this._runOnce(onfulfilled, resolve, reject);
            } else if (this.#state === REJECTED) {
                this._runOnce(onrejected, resolve, reject);
            }
        }
    }
    /**
     * 处理Promise的执行结果，并返回一个新的Promise
     * @param {Function | any} onfulfilled Promise成功时的回调函数
     * @param {Function | any} onrejected Promise失败时的回调函数
     * @returns {MyPromise  | any} 返回一个新的Promise对象
     */
    then(onfulfilled, onrejected) {
        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                onfulfilled,
                onrejected,
                resolve,
                reject
            })
            this._run();
        })
    }
}

// 创建一个MyPromise实例并处理结果
const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 1000)
})
p.then(null, (err) => {
    console.log("Promise 失败 :", err);
    return 134;
}).then((res)=>{
    console.log(res);
})