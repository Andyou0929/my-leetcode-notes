var TimeLimitedCache = function() {
    this.map = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let mapVal = this.map.get(key)
    if(mapVal){
        clearTimeout(mapVal.timer)
    }
    let timer = setTimeout(()=>{
        this.map.delete(key)
    },duration)
    this.map.set(key,{value,timer})
    return Boolean(mapVal)
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.map.has(key) ? this.map.get(key).value : -1

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {

    return this.map.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 2000)); // false
// timeLimitedCache.set(1, 11, 1000); // false
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());