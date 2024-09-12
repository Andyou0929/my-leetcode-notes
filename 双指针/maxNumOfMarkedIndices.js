/**
 * 2576. 求出最多标记下标
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 一开始，所有下标都没有被标记。你可以执行以下操作任意次：
 * 选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
 * 请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。
 * @param {number[]} nums
 * @return {number}
 */
// 二分查找
// 将数组先排序分为两份，前半部分为数组每一项乘以2，因为数组小的乘以2才会出现，小于等于后面的某一项
var maxNumOfMarkedIndices = function(nums) {
    // 先将数组排序
    nums.sort((a,b)=>a-b)
    // 将数组分为两半，前半部分为每一项乘以2
    const frontArr = nums.slice(0,Math.floor(nums.length / 2)).map(i=>i*2);
    //后半部分为正常
    const endArr = nums.slice(Math.floor(nums.length / 2));
    // 定义双指针，判断i和j分别指向的两个下标进行比较
    let i =0,j = 0,ans = 0;
    while(i < frontArr.length && j < endArr.length){
        // 如果成立，标记两个指针，不再引用
        if (frontArr[i] <= endArr[j]) {
            ans += 2;
            i++;
        }
        // 不成立就只会移动后半段数组的指针
        j++;
    }
    return ans;
};
console.log(maxNumOfMarkedIndices([1,78,27,48,14,86,79,68,77,20,57,21,18,67,5,51,70,85,47,56,22,79,41,8,39,81,59,74,14,45,49,15,10,28,16,77,22,65,8,36,79,94,44,80,72,8,96,78,39,92,69,55,9,44,26,76,40,77,16,69,40,64,12,48,66,7,59,10]));