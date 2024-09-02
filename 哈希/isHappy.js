/**
 * 202. 快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。

 *「快乐数」 定义为：
 *对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 *然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 *如果这个过程 结果为 1，那么这个数就是快乐数。
 *如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function itemPowSum(n) {
        let res = 0;
        while (n != 0) {
            res += Math.pow((n % 10),2)
            n = Math.floor(n / 10);
        }
        return res;
    }
    let set = new Set();
    let flag = n;
    while (true) {
        flag = itemPowSum(flag)
        if (flag === 1) return true;
        if (set.has(flag)) return false;
        set.add(flag);
    }
};

console.log(isHappy(19));