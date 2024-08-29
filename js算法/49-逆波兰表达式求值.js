function evalRPN(tokens) {
    // 补充代码
    let stack = []
    let chars = ['+', '-', '*', '/']
    for (const item of tokens) {
        if (!chars.includes(item)) {
            stack.push(item * 1)
        } else {
            let rightNum = stack.pop()
            let leftNum = stack.pop()   
            if (item == '+') stack.push(leftNum + rightNum)
            if (item == '-') stack.push(leftNum - rightNum)
            if (item == '*') stack.push(leftNum * rightNum)
            if (item == '/') stack.push(leftNum / rightNum)
        }
    }
    return stack[0]
}


console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));