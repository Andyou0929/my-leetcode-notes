/**
 * 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pL = p.length;
    const pSort = p.split("").sort().join("");
    const res = [];
    let flag = [];
    let i = 0,j = 0;
    while (i <= s.length) {
        if (flag.length < pL) {
            flag.push(i++);
        }else{
            if (equal(flag)) {
                res.push(flag[0]);
            }
            i = flag[0]+ 1;
            flag = [];
        }
    }
    function equal(arr) {
        let str = arr.map((i)=>s[i]).sort().join("");
        return str === pSort
    }

    return res;
};
console.log(findAnagrams("avav","av"));