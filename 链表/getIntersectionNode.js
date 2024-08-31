    /**
     * 160. 相交链表
     * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
     * Definition for singly-linked list.
    * function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
    */
    class ListNode{
        constructor(val,next){
            this.val = val;
            this.next = next;
        }
    }
    /**
    * @param {ListNode} headA
    * @param {ListNode} headB
    * @return {ListNode | null | undefined}
    */
    var getIntersectionNode = function(headA, headB) {
        if (!headA || !headB) return null;

        let pA = headA;
        while (pA) {
            let pB = headB;
    
            while (pB) {
                if (pA === pB) return pA;
                pB = pB.next;
            }
    
            pA = pA.next;
        }
    };