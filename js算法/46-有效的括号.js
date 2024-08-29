function isValid(s) {
    // 定义栈
    let stack = [];
    // 定义括号枚举
    let enums = {
        "(":")",
        "{":"}",
        "[":"]",
    }
    // 循环字符串
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        // 判断是否为左括号
        if (Object.keys(enums).includes(char)) {
            stack.push(char)
        }else{
            // 出栈
            let stackTop = stack.pop()
            // 判断是否与当前字符的value是否一致
            if (char != enums[stackTop]) {
                return false
            }
        }
    }
    // 栈里有数据说明括号不有效
    return stack.length == 0
}

