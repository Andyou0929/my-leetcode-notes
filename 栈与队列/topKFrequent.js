/**
 * 347. 前 K 个高频元素
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // map集合统计字符出现的次数
    let map = {};
    nums.forEach(i=>{
        // 如果字符不存在,初始化字符
        if (!map[i]) {
            map[i] = 0;
            
        }
        // 字符次数++
        map[i]++;
    })
    // 根据字符出现次数排序,并截取前k个
    return Object
    .keys(map)
    .sort((a,b)=>map[b]-map[a])
    .slice(0,k)
    .map(i=>+i);
};
console.log(topKFrequent([1],1));