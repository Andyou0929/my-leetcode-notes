/**
 * 接雨水
 * 
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @param {number[]} height
 * @return {number}
 */

// 1、动态规划
var trap1 = function(height) {
    let leftNums = [];
    let rightNums = [];
    // 从左往右遍历数组的最大高度
    for (let i = 0; i < height.length; i++) {
        if (!leftNums.length) {
            leftNums.push(height[i]);
            continue;
        }
        leftNums.push(height[i] >= leftNums[leftNums.length - 1] ? height[i] : leftNums[leftNums.length - 1]);

    }
    // 从右往左遍历数组的最大高度
    for (let i = height.length - 1; i >= 0; i--) {
        if (!rightNums.length) {
            rightNums.unshift(height[i]);
            continue;
        }
        rightNums.unshift(height[i] >= rightNums[0] ? height[i] : rightNums[0]);
    }
    let ans = 0;
    // 对两个数组进行比较，取两个数组当前下标的最小值减去当前下标指向目标数组的值，即为存储雨水的数量
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(rightNums[i],leftNums[i]) - height[i];
    }
    return ans;
};
// 2、双指针
var trap2 = function(height) {
    // 左指针
    let left= 0,
    // 右指针
    right = height.length - 1,
    // 左边最大高度
    maxLeft = 0,
    // 右边最大高度
    maxRight = 0,
    ans = 0;
    while (left < right) {
        // 如果右指针指向的高度大于左指针指向的最大高度
        if (height[left] < height[right]) {
            // 如果做指针指向的高度大于左边最高值，将最高值替换，否则就是有积水，
            if (height[left] > maxLeft) {
                maxLeft = height[left];
            }else{
                ans += maxLeft - height[left];
            }
            left++;
        }else{
            // 如果做指针指向的高度大于右边最高值，将最高值替换，否则就是有积水，
            if (height[right] > maxRight) {
                maxRight = height[right];
            }else{
                ans += maxRight - height[right];
            }
            right --;
        }
    }
    return ans;
};
console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));;