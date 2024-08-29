/**
 * 字母异位词分组
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 创建hash表 k:排序后的字符串,v:复合字母异位词条件的字符串数组
    const map = new Map();
    // 循环目标数组
    strs.forEach(item => {
        // 将字符串排序
        let s = [...item].sort().join();
        // 判断排序后的是否存在哈希表中
        if (map.has(s)) {
            // 存在push到数组中
            map.get(s).push(item);
        }else{
            // 不存在创建新的数组
            map.set(s,[item]);
        }
    });
    return [...map.values()]
};