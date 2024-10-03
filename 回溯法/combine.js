/**
 * 77. 组合
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 结果集合
    const res = [];
    function backTracking(n,k,startIndex,tempArr){
        if(tempArr.length === k){
            res.push(tempArr.slice());
            return;
        }else{
            for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
                tempArr.push(i);
                backTracking(n,k,i+1,tempArr);
                // 回溯
                tempArr.pop();
            }
        }
    }
    backTracking(n,k,1,[]);
    return res;
};
console.log(combine(4,2));