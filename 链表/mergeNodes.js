/**
 * 2181. 合并零之间的节点
 * 给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。链表的 开端 和 末尾 的节点都满足 Node.val == 0 。
 * 对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。
 * 返回修改后链表的头节点 head 。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    const nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }
    let ans = new ListNode(0, null);
    let n = ans
    let flag = 0;
    for (const node of nodes) {
        if (node === 0 && flag === 0) {}
        if (node !== 0) {
            flag += node;
        } else {
            if (flag === 0) {
                continue;
            } else {
                n.next = new ListNode(flag, null)
                n = n.next;
                flag = 0;
            }
        }

    }
    return ans.next;
};
var mergeNodes1 = function (head) {
    let readNode = head.next
    let writeNode = new ListNode(0, head)
    let sum = 0
    while (readNode !== null) {
        if (readNode.val !== 0) {
            sum += readNode.val
        } else {
            writeNode = writeNode.next
            writeNode.val = sum
            sum = 0
        }
        readNode = readNode.next
    }
    writeNode.next = null
    return head
};
let n8 = new ListNode(0, null);
let n7 = new ListNode(2, n8);
let n6 = new ListNode(5, n7);
let n5 = new ListNode(4, n6);
let n4 = new ListNode(0, n5);
let n3 = new ListNode(1, n4);
let n2 = new ListNode(3, n3);
let n1 = new ListNode(0, n2);
console.log(mergeNodes1(n1));