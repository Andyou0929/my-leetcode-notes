/**
 * 1184. 公交站间的距离
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。
 * 我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start === destination) return 0;
    if (start > destination) {
        [start,destination] = [destination,start];
    }
    let forward = 0,reverse = 0;
    for (let i = 0; i < distance.length; i++) { //1: i = 0, d[i] = 1; 2 : i = 2; d[i] = 2; 3: i= 2 d[i] = 3 4 i = 3
        if (i >= start && i < destination) { // 1:0 >= 0 && 0 < 4 true  2:true 3: true
           forward += distance[i];          // 1: forword: 1; 2 : forward :3 ; 3: 6 
        }else{
           reverse += distance[i]; 
        }
    }
    return Math.min(forward,reverse);
};

console.log(distanceBetweenBusStops([1,2,3,4],0,3));