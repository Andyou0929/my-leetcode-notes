/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的 回文子串。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let ans = "";
    const helper = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        const str = s.slice(l + 1, r);
        if (str.length > ans.length) {
            ans = str;
        }
    }
    for (let i = 0; i < s.length; i++) {
        helper(i, i);
        helper(i, i + 1);
    }
    return ans;
};
console.log(longestPalindrome("babad"));