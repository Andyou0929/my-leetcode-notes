/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;
    const arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const index = arr.indexOf(char);
        if (index > -1) {
            if (arr.length > max) {
                max = arr.length;
            }
            arr.splice(0, index + 1);
        }
        arr.push(char);
    }
    if(arr.length > max) {
        max = arr.length;
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));