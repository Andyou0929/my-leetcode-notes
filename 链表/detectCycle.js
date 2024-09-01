/**
 * 142. 环形链表 II
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode | null}
 */
// 哈希表
var detectCycle = function(head) {
    //定义一个hash表
    let map = new WeakMap();
    let ans = 0;
    while (head) {
        // 每次循环判断当前指针所指的节点的下个节点是否存在再hash表中
        if (map.has(head.next)) {
            // 存在则返回节点
            return head.next;
        }
        // 不存在将当前节点存放在hash中
        map.set(head,++ans);
        head = head.next;
    }
    return null;
};
// 快慢指针 ，一快一满必定相交
var detectCycle1 = function(head) {
    if(!head || !head.next) return null;
    let slow =head.next, fast = head.next.next;
    while(fast && fast.next && fast!== slow) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(!fast || !fast.next ) return null;
    slow = head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};