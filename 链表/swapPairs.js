//@ts-nocheck
/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//@ts-ignore
class ListNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let ans = new ListNode(0,head);    // 0 -> 1 -> 2 -> 3 -> 4 -> null
    let cur = ans;    // 0 -> 1 -> 2 -> 3 -> 4 -> null
    while (cur.next != null && cur.next.next != null) {
        const flag = cur.next;    // 1 -> 2 -> 3 -> 4 -> null
        const flag2 = cur.next.next.next; // 3 -> 4 -> null
        cur.next = cur.next.next;  // 0 -> 2 ->  -> 3 -> 4 -> null
        cur.next.next = flag;  // 0 -> 2 -> 1 -> 2 -> 3 -> 4 -> null
        flag.next = flag2;     // 0 -> 2 -> 1 -> 3 -> 4 -> null
        cur = cur.next.next 
    }
    return ans.next
};

let node4 = new ListNode(4,null);
let node3 = new ListNode(3,node4);
let node2 = new ListNode(2,node3);
let node1 = new ListNode(1,node2);
console.log(swapPairs(node1));