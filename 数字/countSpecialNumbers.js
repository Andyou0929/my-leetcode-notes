/**
 * 2376. 统计特殊整数
 * 如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。
 * 给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
    if (n <= 10) return n;
    let ans = n;
    // 判断数字是否为特殊整数
    function isSpecialNumbers(num){
        const chars = [];
        for (const char of num.toString()) {
            if (chars.includes(char)) return false;
            chars.push(char);
        }
        return true;
    }
    for (let i = 1; i <= n; i++) {
        // 不是特殊整数的ans--
        if (!isSpecialNumbers(i)) ans--;
    }
    return ans;
};
console.log(countSpecialNumbers(8087006));