class MyPromise {
    
    #taskList = [];
    #state = "pedding";
    #result = null;
    constructor(fun) {
        const reslove = (res) => {
            if (this.#state !== "pedding") return;
            this.#state = "fullfiled";
            this.#result = res;
            this.#taskList.forEach(item => {
                item.onfulfilled(res);
            })
        }
        const reject = (err) => {
            if (this.#state !== "pedding") return;
            this.#state = "rejected";
            this.#result = err;
            this.#taskList.forEach(item => {
                item.onrejected(err);
            })
        }
        try {
            fun(reslove, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onfulfilled, onrejected) {
        if (this.#state === "pedding") {
            this.#taskList.push({
                onfulfilled,
                onrejected
            })
        }
        if(this.#state === "fullfiled"){
            onfulfilled(this.#result);
        }
        if(this.#state === "rejected"){
            onrejected(this.#result);
        }
    }
}

const a = new MyPromise((reslove)=>{
    setTimeout(()=>{
        reslove("success")
    },2000)
})


a.then((res)=>{
    console.log(res);
})