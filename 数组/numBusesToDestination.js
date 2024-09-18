/**
 * 815. 公交路线
 * 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。
 * 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
 * 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。
 * 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
// 优化建图 + 广度优先搜索
var numBusesToDestination = function(routes, source, target) {
    if (source === target) {
        return 0;
    }
    const n = routes.length;
    const edge = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const rec = new Map();
    for (let i = 0; i < n; i++) {
        for (const site of routes[i]) {
            const list = (rec.get(site) || []);
            for (const j of list) {
                edge[i][j] = edge[j][i] = true;
            }
            list.push(i);
            rec.set(site, list);
        }
    }

    const dis = new Array(n).fill(-1);
    const que = [];
    for (const bus of (rec.get(source) || [])) {
        dis[bus] = 1;
        que.push(bus);
    }
    while (que.length) {
        const x = que.shift();
        for (let y = 0; y < n; y++) {
            if (edge[x][y] && dis[y] === -1) {
                dis[y] = dis[x] + 1;
                que.push(y);
            }
        }
    }

    let ret = Number.MAX_VALUE;
    for (const bus of (rec.get(target) || [])) {
        if (dis[bus] !== -1) {
            ret = Math.min(ret, dis[bus]);
        }
    }
    return ret === Number.MAX_VALUE ? -1 : ret;
};
console.log(numBusesToDestination([[1,2,3],[4,5,6],[1,3,4],[4,5,9],[9,12,13]],1,6));