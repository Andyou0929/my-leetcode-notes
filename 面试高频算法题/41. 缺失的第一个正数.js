/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。 
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let min = 1;
    let map = new Map();
    for (const num of nums) {
        map.set(num, num);
        if (num === min) {
            min = num + 1;
        }
    }
    if (map.has(min)) {
        min = min + 1;
    }
    return min;
};

console.log(firstMissingPositive([1,2, 3]));