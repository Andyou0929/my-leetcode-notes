/**
 * 2535. 数组元素和与数字和的绝对差
 * 给你一个正整数数组 nums 。
 * 元素和 是 nums 中的所有元素相加求和。
 * 数字和 是 nums 中每一个元素的每一数位（重复数位需多次求和）相加求和。
 * 返回 元素和 与 数字和 的绝对差。
 * 注意：两个整数 x 和 y 的绝对差定义为 |x - y| 。
 * @param {number[]} nums
 * @return {number}
 */
// 使用reduce 事件复杂的O(n)
var differenceOfSum = function (nums) {
    function getNumItemSum(num) {
        let ans = 0;
        while (num > 0) {
            console.log(num);
            ans += num % 10;
            num = Math.floor(num / 10);
        }
        return ans;
    }
    const itemSum = nums.reduce((pre, cur) => pre + cur, 0);
    const numSum = nums.reduce((pre, cur) => {
        if (cur < 10) {
            return pre + cur;
        } else {
            return pre + getNumItemSum(cur);
        }
    }, 0)
    return Math.abs(itemSum - numSum);
};

// 单层for
const differenceOfSum1 = function (nums) {
    function getNumItemSum(num) {
        let ans = 0;
        while (num > 0) {
            ans += num % 10;
            num = Math.floor(num / 10);
        }
        return ans;
    }
    let itemSum = 0,
        numSum = 0;
    for (const num of nums) {
        itemSum += num;
        // 无需判断是否是一位数，此方法对一位数计算仍然有效
        numSum+= getNumItemSum(num);
    }
    return Math.abs(itemSum - numSum);
}

console.log(differenceOfSum1([1,15,6,3]));