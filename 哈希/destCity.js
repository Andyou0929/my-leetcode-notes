/**
 * 1436. 旅行终点站
 * 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。
 * 请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。

 * 题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。
 * @param {string[][]} paths
 * @return {string}
 */

// 思路：找到没有下一站的城市即可，即没有出现在[cityA,cityB] ，cityA位置的城市
var destCity = function (paths) {
    const map = {};
    const citys = [...new Set(paths.flat())];
    for (const [cirtA, cityB] of paths) {
        if (!map[cirtA]) {
            map[cirtA] = [];
        }
        map[cirtA].push(cityB);
    }
    const endCity = citys.filter(item => !Object.keys(map).includes(item))
    return endCity[0];
};

// 优化
var destCity1 = function (paths) {
    const map = [];
    for (const [cityA] of paths) {
        map.push(cityA);
    }
    for (const [_, cityB] of paths) {
        if (!map.includes(cityB)) {
            return cityB;
        }
    }
}

console.log(destCity1([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"]
]));