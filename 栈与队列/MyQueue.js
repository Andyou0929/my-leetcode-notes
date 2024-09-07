/**
 * 232. 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）
 */
// 实现 MyQueue 类：
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * void push(int x) 将元素 x 推到队列的末尾
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * int pop() 从队列的开头移除并返回元素
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 栈2中有元素，说明两个栈已经转换过，pop出栈2的元素，即队列的开头
    if (this.stack2.length) {
        return this.stack2.pop();
    }
    // 如果栈2是空的，说明两个栈还没有进行转换
    while (this.stack1.length) {
        // 将栈1中的元素依次pop出，并push到栈2中，使队列的开头再栈2的栈顶，即可以方便返回
        this.stack2.push(this.stack1.pop());
    }
    // 返回栈2得栈顶
    return this.stack2.pop();
};

/**
 * int peek() 返回队列开头的元素
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 将队列得开头pop出去
    const x = this.pop();
    // 再将pop出去得元素push到栈2中，因为栈2的栈顶永远是队列的开头
    this.stack2.push(x);
    return x;
};

/**
 * boolean empty() 如果队列为空，返回 true ；否则，返回 false
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 栈1与栈2的长度都为空则，队列为空，否则不为空
    return !this.stack1.length && !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */