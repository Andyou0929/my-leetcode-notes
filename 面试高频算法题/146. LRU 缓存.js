/**
 * 146. LRU 缓存
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 */
// 思路：这个过程就像在一摞书中，get操作就是取某本书然后放在最上层，而set操作就是将新书放在最上层，多余的书就把最后一把本拿掉
// 可以使用双向链表实现
/**
 * 
 * @param {*} key 
 * @param {*} value 
 */
var ListNode = function (key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}
/**
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    // 哨兵节点，可以使每个节点的prev和next不为空
    this.dummy = new ListNode();
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    // 记录key对应的node节点
    this.keyToNode = new Map();
};

/** 
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.getNode(key);
    return node ? node.value : -1;
};

/** 
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。
 * 如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.getNode(key);
    if(node){
        node.value = value;
        return;
    }
    node = new ListNode(key,value);
    this.keyToNode.set(key,node);
    this.pushFront(node);
    if(this.keyToNode.size > this.capacity){
        const backNode = this.dummy.prev;
        this.keyToNode.delete(backNode.key);
        this.remove(backNode);
    }
};

/**
 * 根据key查找节点，如果有节点则将节点从链表中删除，再放到哨兵节点之前
 * @param {number} key 
 * @returns 
 */
LRUCache.prototype.getNode = function(key){
    if(!this.keyToNode.has(key)){
        return null;
    }
    const node = this.keyToNode.get(key); 
    this.remove(node); // 把书拿出来
    this.pushFront(node); // 把书放在最上面
    return node;

}

/**
 * 删除节点
 * @param {ListNode} node 
 */
LRUCache.prototype.remove = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
}
/**
 * 将节点放置到哨兵节点之前
 * @param {ListNode} node 
 */
LRUCache.prototype.pushFront = function(node){
    node.prev = this.dummy;
    node.next = this.dummy.next;
    node.prev.next = node;
    node.next.prev = node;
}