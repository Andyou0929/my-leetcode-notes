// @ts-nocheck
/**
 * 2073. 买票需要的时间
 * 有 n 个人前来排队买票，其中第 0 人站在队伍 最前方 ，第 (n - 1) 人站在队伍 最后方 。
 * 给你一个下标从 0 开始的整数数组 tickets ，数组长度为 n ，其中第 i 人想要购买的票数为 tickets[i] 。
 * 每个人买票都需要用掉 恰好 1 秒 。一个人 一次只能买一张票 ，如果需要购买更多票，他必须走到  队尾 重新排队（瞬间 发生，不计时间）。
 * 如果一个人没有剩下需要买的票，那他将会 离开 队伍。
 * 返回位于位置 k（下标从 0 开始）的人完成买票需要的时间（以秒为单位）。
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
// 队列标记，空间复杂度大
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    const flagTickets = tickets.map((ticket,index)=>{
        return{
            ticket,
            isFlag:index === k
        }
    })
    while (flagTickets.length) {
        const ticket = flagTickets.shift();
        time++;
        if (ticket.ticket - 1 === 0) {
            if(ticket.isFlag){
                return time;
            }
        }else{
            flagTickets.push({ticket:ticket.ticket - 1,isFlag:ticket.isFlag});
        }
    }
};
// k位置之前能买票的数量最多为tickets[k]张，k位置之后的人最多能买票的数量为tickets[k] - 1张
var timeRequiredToBuy1 = function(tickets, k){
    const tk = tickets[k];
    let time = 0;
    for (let i = 0; i < tickets.length; i++) {
        time+= Math.min(tickets[i],(i < k ? tk : tk - 1));        
    }
    return time;
}
console.log(timeRequiredToBuy( [2,3,2], 2));