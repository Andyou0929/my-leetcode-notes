/**
 * 344. 反转字符串
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 双指针
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        let flag = s[i];
        s[i] = s[j];
        s[j] = flag;
        i++;
        j--;
    }
};
let str = ["1","2","3","4","5"];
reverseString(str);
console.log(str);