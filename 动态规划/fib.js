/**
 * 509. 斐波那契数
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给定 n ，请计算 F(n) 。
 * @param {number} n
 * @return {number}
 */
// 递归
var fib = function(n) {
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

// 动态规划五部曲
var fib1 = function(n){
    // 1.确定dp数组及下标的含义
    // 3.dp数组初始化
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    // 4.遍历顺序
    for (let i = 2; i < dp.length; i++) {
        // 2.递推公式
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log("fib:",fib(2));
console.log("fib1:",fib1(2));
console.log("fib:",fib(3));
console.log("fib1:",fib1(3));
console.log("fib:",fib(4));
console.log("fib1:",fib1(4));