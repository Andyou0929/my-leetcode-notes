/**
 * 997. 找到小镇的法官
 * 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
 * 如果小镇法官真的存在，那么：
 * 小镇法官不会信任任何人。
 * 每个人（除了小镇法官）都信任这位小镇法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
 * 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    // 使用两个数组分别存储n个人每个人被信任和新人别人的次数
    const inDegrees = new Array(n + 1).fill(0);
    const outDegrees = new Array(n + 1).fill(0);
    for (const edge of trust) {
        const x = edge[0],
            y = edge[1];
        ++inDegrees[y];
        ++outDegrees[x];
    }
    // 如果被信任的人等于村子里人的总数，且不信任任何人则这个人为法官
    for (let i = 1; i <= n; ++i) {
        if (inDegrees[i] === n - 1 && outDegrees[i] === 0) {
            return i;
        }
    }
    return -1;
};
console.log(findJudge(4, [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]]));