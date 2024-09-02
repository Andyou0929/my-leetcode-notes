/**
 * 383. 赎金信
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true ；否则返回 false 。
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// hash
var canConstruct = function(ransomNote, magazine) {
    // 创建26个字母的hash表
    let arr = new Array(26).fill(0);
    let baseCode = "a".charCodeAt();
    for (const char of magazine) {
        // 储存magazine的所以字母次数
        arr[char.charCodeAt() - baseCode]++;
    }
    for (const char of ransomNote) {
        // 判断已经存在arr的字母的数量是否满足组成ransomNote，不满足返回false
        if (--arr[char.charCodeAt() - baseCode] < 0) {
            return false;
        }
    }
    return true;
};
console.log(canConstruct("a","b"));
console.log(canConstruct("aa","ab"));
console.log(canConstruct("aa","aab"));