const obj = {
    [Symbol('a')]: '1111',
    set: new Set([1, 2, 3]),
    map: new Map([
        ['a', 1],
        ['b', 2]
    ]),
    a: 1,
    b: '2',
    c: true,
    d: [{
        d1: 1
    }, {
        d2: 2
    }],
    e: {
        e1: 1,
        e2: 2
    },
    f: function () {
        console.log('function', 123)
    },
}
const newObj = {
    ...obj
};
// 源对象不会被修改
newObj.a = 11;
// 源对象也会被修改
newObj.e.e1 = 11
/* console.log(newObj);
console.log(obj); */


// 深拷贝
// 1.使用JSON，无法拷贝函数和symbol
const copy1 = JSON.parse(JSON.stringify(obj));

// 使用structuredClone进行拷贝，无法拷贝函数和symbol，如果有函数会报错
/* const copy2 = structuredClone(obj);
console.log(copy1); */

// 手写深拷贝
const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    let result;
    if (Array.isArray(obj)) {
        result = [];
        for (let i = 0; i < obj.length; i++) {
            result.push(deepClone(obj[i]));
        }
    } else if (obj instanceof Map) {
        result = new Map([...obj]);
    } else if (obj instanceof Set) {
        result = new Set([...obj]);
    } else {
        result = {};
        Reflect.ownKeys(obj).forEach(key => {
            result[key] = deepClone(obj[key]);
        })
    }
    return result;
}
const clone = deepClone(obj);
console.log(clone);