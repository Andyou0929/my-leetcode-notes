/**
 * 58. 最后一个单词的长度
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastStr = "";
    // 从后向前遍历
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        // 遇到空字符串且存储最后一个单词的字符串长度为空跳过
        if (char === " ") {
            // 出现一个单词，返回长度
            if (lastStr.length) {
                return lastStr.length;
            }
            continue;
        }
        lastStr+=char;
    }
    return lastStr.length || 0;
};
console.log(lengthOfLastWord("a"));