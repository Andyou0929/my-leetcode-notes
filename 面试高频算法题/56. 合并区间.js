/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((p,q)=>p[0] - q[0]);
    const ans = [];
    for (const p of intervals) {
        const len = ans.length;
        if (len && p[0] <= ans[len - 1][1]) {
            ans[len-1][1] = Math.max(ans[len-1][1],p[1]);
        }else{
            ans.push(p);
        }
    }
    return ans;
};

console.log(merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]));