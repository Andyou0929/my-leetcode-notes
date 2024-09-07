/**
 * 1047. 删除字符串中的所有相邻重复项
 * 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 s 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    // 栈
    let stack = [];
    for (const char of s) {
        // 每次循环拿出栈顶判断当前字符是否与栈顶相等
        const top = stack.pop();
        // 如果不相等将栈顶和当前字符push进栈
        if (char !== top) {
            stack.push(top,char)
        }
        // 相等不做任何操作,因为相邻的字符已经被移出栈
    }
    return stack.join("");
};
console.log(removeDuplicates("aaaaaaa"));