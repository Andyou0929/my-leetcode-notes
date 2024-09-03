/**
 * 18. 四数之和
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
 * 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 在三数之和的基础上再加一层循环
var fourSum = function(nums, target) {
    if (nums.length < 4 ) return [];
    let ans = new Set();;
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i+1; j < nums.length - 2; j++) {
            let s = j+1,e = nums.length - 1;
            while (s < e) {
                let sum = nums[i] + nums[j] + nums[s] + nums [e];
                if (sum === target) {
                    ans.add(JSON.stringify([nums[i],nums[j],nums[s],nums[e]].sort()));
                    e--;
                    s++;
                }else if (sum > target) {
                    e--;
                }else if(sum < target){
                    s++;
                }
            }
            
        }
    }
    return Array.from(ans).map(JSON.parse)
};
console.log(fourSum([2,2,2,2,2],3));