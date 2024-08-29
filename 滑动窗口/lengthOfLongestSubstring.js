/**
 * 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length || s.length === 1) {
        return s.length;
    }
    let arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (arr.includes(char)) {
            if (arr.length > max) {
                max = arr.length;
            }
            const index = arr.indexOf(char);
            arr.splice(0,index+1);
            
        }
        arr.push(char);
    }
    if (arr.length > max) {
        max = arr.length;
    }
    return max;
};
console.log(lengthOfLongestSubstring("dvdf"));