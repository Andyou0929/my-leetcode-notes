/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map()
    arr1.forEach((item=>{
        map.set(item.id,item)
    }))
    arr2.forEach(item=>{
        if(map.has(item.id)){
            map.set(item.id,{...map.get(item.id),...item})
        }else{
            map.set(item.id,item)
        }
    })
    let res = []
    map.forEach(item=>res.push(item))
    return res.sort((a,b)=>a.id -b.id)
};


// @ts-ignore
const arr1 = [{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}],
arr2 = [{"id":2,"o":48,"z":84,"y":61}]

console.log(join(arr1,arr2));