/**
 * 977. 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param {number[]} nums
 * @return {number[]}
 */
// 数组函数
var sortedSquares1 = function(nums) {
    return nums.map(i=>i * i).sort((a,b)=>a-b);
};
// 双指针
var sortedSquares = function(nums) {
    // 头指针
    let i = 0;
    // 尾指针
    let j = nums.length - 1;
    // 创建一个和nums长度相同的数组
    let ans = new Array(nums.length).fill(0);
    // ans数组的尾指针
    let ansIndex = nums.length - 1;
    while (i <= j) {
        // 头和尾的平方
        const l = Math.pow(nums[i],2);
        const r = Math.pow(nums[j],2);
        // 如果头指针所指数的的平方大于尾指针所指数的平方
        if (l > r) {
            // 将头指针的数的平方放置到ans数组的末尾
            ans[ansIndex--] = l;
            // 头指针移动,接下来找比他大,或者比他小的,依次放入数组
            i++;
        }else{
            ans[ansIndex--] = r;
            j--
        }
    }
    return ans;
}   
console.log(sortedSquares([-4,-1,0,3,10]));