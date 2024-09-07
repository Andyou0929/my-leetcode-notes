/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;
    // 括号表
    let obj = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    // 存储括号的栈
    let stack = [];
    for (const char of s) {
        // 如果师左括号，进栈
        if (Object.keys(obj).includes(char)) {
            stack.push(char)
        }
        // 如果是右括号，栈顶出栈，判断其在括号表对应的右括号是否与当前的括号一致
        if (Object.values(obj).includes(char)) {
                if (obj[stack.pop()] !== char) {
                    // 不一致 返回false
                    return false;
                }
        } 
    }
    // 根据栈的长度判断括号是否全
    return !stack.length;
};
console.log(isValid("([])"));