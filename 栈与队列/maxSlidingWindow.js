/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 创建一个单调队列
    class MyQueue{
        constructor(){
            this.queue = [];
        };
        /**
         * 将滑动窗口新进的值，放到队列
         * @param {*} val 
         */
        enqueue(val) {
            // 拿到队列中最后一个值
            let back = this.queue[this.queue.length - 1];
            // 如果队列不为空并且要放入的值大于最后一个值,进入循环,
            // 直到最后一个值比当前值大或者队列为空,跳出循环
            while (back != undefined && val > back) {
                // pop出队列最后一个值
                this.queue.pop();
                // 重新赋值back
                back = this.queue[this.queue.length - 1];
            }
            // 将当前值push到队列
            this.queue.push(val);
        }
        /**
         * 弹出滑动窗口出去的元素
         * @param {*} val 
         */
        dequeue(val){
            // 拿到队列的头元素
            let front = this.front();
            // 如果队列头部的值等于滑动窗口移除的值,说明滑动窗口移除的值为最大值,移除几个
            if (val === front) {
                this.queue.shift();
            }
        }
        /**
         * 返回队列的头部
         * @returns {number} 对列头
         */
        front(){
            return this.queue[0];
        }
    } 
    // 创建我们自定义的队列
    const myQueue = new MyQueue();
    // 定义双指针.i:滑动窗口头指针,j:滑动窗口尾指针
    let i = 0,j = 0;
    let ans = [];
    // 初始化队列,将第一个窗口所在位置的所有元素放在自己的队列,并根据单调队列的形式存放
    while (j < k) {
        myQueue.enqueue(nums[j++])
    } 
    // 队列头部为当前滑动窗口的最大值,将头部push到答案数组
    ans.push(myQueue.front());
    /**
     * 双指针循环数组
     * i所指向的元素为滑动窗口要移除的元素
     * j所指向的元素为滑动窗口所新进入的元素
    */
    while (j < nums.length) {
        // 新元素进入队列
        myQueue.enqueue(nums[j]);
        // 上一个滑动窗口所在位置的元素的最大值移除队列
        myQueue.dequeue(nums[i]);
        ans.push(myQueue.front());
        i++,j++;
    }
    return ans;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));