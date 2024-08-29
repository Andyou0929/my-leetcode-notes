class EventEmitter {
    constructor(){
        this.eventList = new Map()
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!this.eventList.has(eventName)){
            this.eventList.set(eventName,[callback])
        }else{
            this.eventList.get(eventName).push(callback)
        }
        console.log(this.eventList);
        return {
            unsubscribe: () => {
                let fnList = this.eventList.get(eventName);
                let index = fnList.findIndex((fn) => fn === callback);
                fnList.splice(index, 1);
                this.eventList.set(eventName, fnList);
                return undefined
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        console.log(this);
        const eventArr = this.eventList.get(eventName) || []
        let res = eventArr.map(item=>item(...args))
        return res
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
/* const emitter = new EventEmitter();
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick'));
console.log(sub.unsubscribe());
console.log(emitter.emit('onClick')); */

/* const emitter = new EventEmitter();
emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); })
console.log(emitter.emit("firstEvent", [1, 2, 3]));// ["1,2,3"]
console.log(emitter.emit("firstEvent", [3, 4, 6]));// ["3,4,6"] */

/* const emitter = new EventEmitter();
console.log(emitter.emit("firstEvent")); // [], 还没有订阅任何回调函数
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
console.log(emitter.emit("firstEvent")); // [5, 6], 返回 cb1 和 cb2 的输出 */

const emitter = new EventEmitter();
const a = emitter.subscribe("firstEvent", x => x + 1);
const b = emitter.subscribe("firstEvent", x => x + 2);
const c = emitter.subscribe("firstEvent", x => x + 3);
a.unsubscribe()
b.unsubscribe()
console.log(emitter.emit("firstEvent",[5]));


