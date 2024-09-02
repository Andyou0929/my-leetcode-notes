/**
 * 454. 四数相加 II
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// 暴力
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let ans = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            for (let k = 0; k < nums3.length; k++) {
                for (let z = 0; z < nums4.length; z++) {
                    if (nums1[i] + nums2[j] + nums3[k] + nums4[z] === 0) {
                        ans++;
                    }
                }
            }
        }
    }
    return ans;
};
// hash  + 分组
// 解法思路:https://www.programmercarl.com/0454.%E5%9B%9B%E6%95%B0%E7%9B%B8%E5%8A%A0II.html
var fourSumCount1 = function(nums1, nums2, nums3, nums4) {
    const map = new Map();
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            let sum = n1+n2;
            map.set(sum,(map.get(sum) || 0) + 1);
        }
    }
    let ans = 0;
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            let sum = n3 + n4;
            ans += (map.get(0 - sum) || 0);
        }
    }
    return ans;
};
console.log(fourSumCount1([1,2],[-2,-1],[-1,2],[0,2]));