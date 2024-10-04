/* 
    Promise.all([])
    接收一个异步任务的数组，如果出现错误，直接返回错误信息，如果没有出现错误，返回所有异步任务的结果数组
*/
const MyAll = (promises) => {
    return new Promise((resolve, reject) => {
        if (!promises.length) resolve([]);
        const length = promises.length;
        const result = new Array(length);
        let index = 0;
        for (let i = 0; i < length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                index++;
                if (index === length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })

}
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("unknown error")
    },2000)
})

const res = [1, 2, Promise.resolve("ok"),p];

MyAll(res).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})