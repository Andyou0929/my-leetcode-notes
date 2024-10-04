/* 
    手写Promse.race([])
    接收一个异步队列的数组，返回第一个完成的异步任务的结果
*/

const myRace = (promises) => {
    return new Promise((resolve,reject)=>{
        if(!promises.length) resolve(null);
        for (const promise of promises) {
            Promise.resolve(promise).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        }
    })
}