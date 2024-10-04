const arr = [1, [2, [3, [4, 5]]], 6,[7,[8,9]]]
//  方法一：数组自带的扁平化方法,flat的参数代表的是需要展开几层，如果是Infinity的话，就是不管嵌套几层，全部都展开
// console.log(arr.flat(Infinity))

// 递归
function myFlat(arr) {
    let flatArr = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            flatArr = [...flatArr,...myFlat(item)];
        }else{
            flatArr.push(item);
        }
    }
    return flatArr;
}
console.log(myFlat(arr));

// 使用reduce
function myFlat(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur) ? myFlat(cur) : cur);
    },[])
}
console.log(myFlat(arr));

// 栈思想
function myFlag(arr){
    const result = [];
    const stack = [].concat(arr);
    while (stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            stack.push(...item);
        }else{
            result.unshift(item);
        }
    }
    return result;
}
console.log(myFlag(arr));