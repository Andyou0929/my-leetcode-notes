/**
 * 242. 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 字母排序对比法
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};
// hash表
var isAnagram1 = function(s, t) {
    if(s.length !== t.length) return false;
    const hash = new Array(26).fill(0);
    const baseCode = "a".charCodeAt();
    for (const char of s) {
        hash[char.charCodeAt() - baseCode]++;
    }
    for (const char of t) {
        if (!hash[char.charCodeAt() - baseCode]) return false;
        hash[char.charCodeAt() - baseCode]--;
    }
    return true;
};

console.log(isAnagram1("anagram","nagaram"));
console.log(isAnagram1("rat","car"));