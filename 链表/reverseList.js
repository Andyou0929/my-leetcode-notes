/**
 * 206. 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// @ts-ignore
class ListNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode | null}
 *  栈思想
 */
var reverseList = function(head) {
    if (!head) {
        return null
    }
    let stack = [head.val];
    while (head.next) {
        stack.push(head.next.val);
        head = head.next;
    }
    let ans = new ListNode(0,null)
    let cur = ans;
    stack.reverse().forEach(item=>{
        cur.next = new ListNode(item,null);
        cur = cur.next;
    })
    return ans.next;
};
// 双指针
var reverseList2 = function(head) {
    if (!head || !head.next) return head;
    let pre = null;
    let cur = head.next;
    while (cur) {
        let flag = cur.next;
        cur.next = pre;
        pre = cur;
        cur = flag
    }
    return pre
};
// 递归
var reverse = function(cur,pre){ // [{1,ListNode(2),null}]          // [{val:2,next:ListNode(3)},{val:1,next:null}]
    if (!cur) return pre;
    let flag = cur.next;   // flag = {val:2,next:ListNode(3)}       // flag = {val:3,next:ListNode(4)} 
    cur.next = pre;         // cur = {val:1,next:null}    // cur = {val:2,next:{val:1,next:null}}
    return reverse(flag,cur);   // return-1:[{{val:2,next:ListNode(3)},{val:1,next:null}}]
}
var reverseList3 = function(head) {
    return reverse(head,null) // [{1,ListNode(2),null}]
};
let node7 = new ListNode(7,null)
let node6 = new ListNode(6,node7);
let node5 = new ListNode(5,node6);
let node4 = new ListNode(4,node5);
let node3 = new ListNode(3,node4);
let node2 = new ListNode(2,node3);
let node1 = new ListNode(1,node2);
console.log(reverseList3(node1));