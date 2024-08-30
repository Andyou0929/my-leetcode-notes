/**
 * 203.移除链表元素
 * 删除链表中等于给定值 val 的所有节点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    
    }
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ans = new ListNode(0,head);
    let cur = ans;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ans.next
};
let node7 = new ListNode(6,null)
let node6 = new ListNode(5,node7);
let node5 = new ListNode(4,node6);
let node4 = new ListNode(3,node5);
let node3 = new ListNode(6,node4);
let node2 = new ListNode(2,node3);
let node1 = new ListNode(1,node2);
console.log(removeElements(node1,6));