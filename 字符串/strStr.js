/**
 * 28. 找出字符串中第一个匹配项的下标
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果 needle 不是 haystack 的一部分，则返回  -1 。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 函数调用
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
var strStr1 = function(haystack, needle) {
    // 建立一个数组，存储haystack中needle首字母存在的位置
    let arr = [];
    let firstChar = needle[0];
    // haystack中needle首字母存在的下标存储进去
    for (let i = 0; i < haystack.length; i++) {
        if (firstChar === haystack[i]) {
            arr.push(i);
        }
    }
    // 根据首字母的位置与needle的长度，判断每个下标是否复合
    for (const i of arr) {
        let j = i;
        let str = ""
        while (str.length <= needle.length) {
            // 找到第一个返回下标
            if (str === needle) {
                return i;
            }
            str+= haystack[j++];
        }
    }
    // 没有找到返回-1
    return -1;
};
console.log(strStr1("sadbutsad1","sad1"));