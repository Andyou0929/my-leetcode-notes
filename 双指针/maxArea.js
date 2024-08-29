/**
 * 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        const area = (r - l) * Math.min(height[l],height[r]);
        if (area > max) {
            max = area;
        }
        if (height[l] < height[r]) {
            l++;
        }else{
            r--;
        }
    }
    return max;
};

const arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));