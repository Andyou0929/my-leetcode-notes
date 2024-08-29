/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    let res = undefined
    if (obj instanceof Array) {
        res = []
        for (const key in obj) {
            if (Boolean(obj[key])) {
                res.push(compactObject(obj[key]))
            }
        }
    }else if(obj instanceof Object){
        res = {}
        for (const key in obj) {
            if (Boolean(obj[key])) {
                res[key] = compactObject(obj[key])
            }
        }
    }else{
        res = obj
    }
    return res
};
console.log(compactObject({"a": null, "b": [false, 1]})); // { b: [ 1 ] }
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [5, [], [16]]
