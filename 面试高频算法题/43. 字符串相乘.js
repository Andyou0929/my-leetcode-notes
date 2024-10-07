/**
 * 43. 字符串相乘
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 纯模拟算法，时间和空间复杂度高
var multiply = function (num1, num2) {
    // 如果有一个数为0直接返回0
    if(num1 === "0" || num2 === "0") return "0";
    const arr = [];
    // 模拟乘法运算，一位一位进行运算
    for (let i = num1.length - 1, k = 0; i >= 0; i--, k++) {
        const level = [];
        let last = 0
        for (let j = num2.length - 1; j >= 0; j--) {
            const l = +num1[i] * +num2[j] + last;
            if (j !== 0) {
                // 保存上一个进位数
                last = Math.floor(l / 10);
                level.unshift(l % 10);
            } else {
                if (l >= 10) {
                    level.unshift(l % 10);
                    level.unshift(Math.floor(l / 10 % 10));
                } else {
                    level.unshift(l);
                }
            }
        }
        // 尾部补0
        const len = level.length;
        level.length = level.length + k;
        level.fill(0, len)
        arr.push(level);
    }
    // 头部补0
    const maxLen = arr[arr.length - 1].length;
    for (let i = 0; i < arr.length; i++) {
        const aLen = arr[i].length;
        for (let j = 0; j < maxLen - aLen; j++) {
            arr[i].unshift(0);
        }
    }
    // 每一位进行相加，并用字符串拼接
    let result = "";
    let last = 0;
    for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
        let sum = 0;
        for (const item of arr) {
            sum += item[i];
        }
        sum += last;
        if (i !== 0) {
            result = sum % 10 + result;
            // 保存上一个进位数
            last = Math.floor(sum / 10);
            console.log(last);
        } else {
            result = sum + result;
        }
    }
    return result;
};

const multiply1 =(num1,num2)=>{
    const len1 = num1.length;
    const len2 = num2.length;
    const arr = new Array(len1 + len2).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = num1[i];
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = num2[j];
            const m = n1 * n2;
            const sum = arr[i + j + 1] + m;
            arr[i + j + 1] = sum % 10;
            arr[i + j] = Math.floor(sum / 10);
        }
    }
    while(arr[0] === 0){
        arr.shift();
    }
    return arr.length ? arr.join("") : "0";
} 

console.log(multiply("999", "999"));