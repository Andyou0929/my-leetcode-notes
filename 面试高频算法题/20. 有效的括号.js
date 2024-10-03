/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *     左括号必须用相同类型的右括号闭合。
 *     左括号必须以正确的顺序闭合。
 *     每个右括号都有一个对应的相同类型的左括号。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        ")":"(",
        "}":"{",
        "]":"[",
    };
    for (const char of s) {
        if (Object.keys(map).includes(char)) {
            const pop = stack.pop();
            if (map[char] !== pop) return false;
        }
        if(Object.values(map).includes(char)){
            stack.push(char);
        }
    };
    return !Boolean(stack.length);
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));