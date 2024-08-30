/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
var reverseList = function(head){
    if (!head || !head.next) return head;
    let pre = null;
    let cur = head;
    while (cur) {
        let flag = cur.next;
        cur.next = pre;
        pre = cur;
        cur = flag;
    }
    return pre;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 先反转.再删除法
var removeNthFromEnd = function(head, n) {
    let reverse = reverseList(head);
    let ans = new ListNode(0,reverse);
    let i = 1;
    let cur = ans
    while (cur.next) {
        if (i === n) {
            cur.next = cur.next.next;
            break;
        }
        i++;
        cur = cur.next;
    }
    let res = reverseList(ans.next);
    return res
};
// 快慢指针法
var removeNthFromEnd1 = function(head, n){
    let i = -1;
    let ans = new ListNode(0,head)
    let fast = ans;
    let slow = ans;
    while (true) {
        if (fast == null && i === n) {
            slow.next = slow.next.next;
            break;
        }
        if (i < n) {
            i++;
        }else if(i === n){
            slow = slow.next;
        }
        fast = fast.next;
    }
    return ans.next
}
let node4 = new ListNode(4,null);
let node3 = new ListNode(3,node4);
let node2 = new ListNode(2,node3);
let node1 = new ListNode(1,node2);
console.log(removeNthFromEnd1(node1,4));