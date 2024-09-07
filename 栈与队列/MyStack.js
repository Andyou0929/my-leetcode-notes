/**
 * 225. 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 */
// 实现 MyStack 类：
var MyStack = function() {
    this.queueIn = [];
    this.queueOut = [];
};

/** 
 * void push(int x) 将元素 x 压入栈顶。
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queueIn.push(x);
};

/**
 * int pop() 移除并返回栈顶元素。
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queueIn.length > 1) {
        this.queueOut.push(this.queueIn.shift());
    }
    let head = this.queueIn.shift();
    while (this.queueOut.length) {
        this.queueIn.push(this.queueOut.shift());
    }
    return head;
};

/**
 * int top() 返回栈顶元素。
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();
    this.queueIn.push(x);
    return x;
};

/**
 * boolean empty() 如果栈是空的，返回 true ；否则，返回 false
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queueIn.length && !this.queueOut.length;
};

var obj = new MyStack()
obj.push(1)
console.log(obj.queueIn,"queueIn");
console.log(obj.queueOut,"queueOut");
obj.push(2)
console.log(obj.queueIn,"queueIn");
console.log(obj.queueOut,"queueOut");
var param_2 = obj.pop()
console.log(obj.queueIn,"queueIn");
console.log(obj.queueOut,"queueOut");
obj.push(3)
console.log(obj.queueIn,"queueIn");
console.log(obj.queueOut,"queueOut");
var param_3 = obj.top()
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */