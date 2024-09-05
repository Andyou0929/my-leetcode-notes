/**
 * 459. 重复的子字符串
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 如果是重复的子字符串组成，那么s+s中必定包含s,没有包含则不符合条件
    let s1 = (s + s).slice(1,-1);
    return s1.indexOf(s) != -1;
};
console.log(repeatedSubstringPattern("abcacca"));