/**
 * 150. 逆波兰表达式求值
 * 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
 * 请你计算该表达式。返回一个表示表达式值的整数。
 * 注意：
 * 有效的算符为 '+'、'-'、'*' 和 '/' 。
 * 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
 * 两个整数之间的除法总是 向零截断 。
 * 表达式中不含除零运算。
 * 输入是一个根据逆波兰表示法表示的算术表达式。
 * 答案及所有中间计算结果可以用 32 位 整数表示。
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // 创建栈
    const stack = [];
    // 符号表
    const sym = ["+","-","*","/"]
    // 根据符号计算
    function computer(a,b,symbol) {
        switch(symbol){
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b | 0;
        }
    }
    // 循环数组
    tokens.forEach(item=>{
        // 判断当前项是否为运算符
        if (sym.includes(item)) {
            // 是的话pop出栈顶两个元素，用运算符计算他们，然后将结果pop进栈
            const num1 = stack.pop();
            const num2 = stack.pop();
            // let ans = eval(`(${num2})${item}(${num1})`);
            stack.push(computer(num2,num1,item));
        }else{
            // 不是运算符直接push进栈
            stack.push(item);
        }
    })
    // 栈顶即为结果直接pop出
    return stack.pop();
};
console.log(evalRPN(["4","-2","/","2","-3","-","-"]));