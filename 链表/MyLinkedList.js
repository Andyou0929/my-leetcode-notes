
/**
 * 203. 移除链表元素
 * 你可以选择使用单链表或者双链表，设计并实现自己的链表。
 * 实现 MyLinkedList 类
 */
// 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
// MyLinkedList() 初始化 MyLinkedList 对象。
// @ts-ignore
class ListNode{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function() {
    
    this.length = 0;
    this.head = null;
};

MyLinkedList.prototype.getNode = function(index) {
    if (index < 0 ||  index >= this.length) return null;
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
       if (i === index) {
        return cur;
       }
        cur = cur.next;
    }
    return null;
};

/** 
 * int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 ||  index >= this.length || !this.head) return -1;
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
       if (i === index) {
        return cur.val;
       }
        cur = cur.next;
    }
    return -1;
};

/** 
 * void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new ListNode(val,this.head);
    this.length++;
};

/** 
 * void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.head) {
        this.head = new ListNode(val,null);
        this.length++;
        return;
    }
    let cur = this.head;
    while (true) {
        if (!cur.next) {
            cur.next = new ListNode(val,null);
            this.length++;
            return;
        }
        cur = cur.next;
    }
};

/** 
 * void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。
 * 如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.length) {
        return;
    }
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.length) {
        this.addAtTail(val)
        return;
    }
    let node = this.getNode(index - 1);
    node.next = new ListNode(val,node.next)
    this.length ++;
};

/** 
 * void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
        return
    }
    let node = this.getNode(index - 1);
    console.log(node);
    node.next = node.next.next;
    this.length--;
};
let o = new MyLinkedList();
let funs = ["addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get","get","deleteAtIndex","deleteAtIndex","get","deleteAtIndex","get"]
let args = [[1],[3],[1,2],[1],[1],[1],[3],[3],[0],[0],[0],[0]]
funs.forEach((funName,index)=>{
    console.log(funName,index);
    console.log(o.length);
    console.log(o[funName](...args[index]));
    console.log(o.head);
})
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */