/**
 * 394. 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * @param {string} s
 * @return {string}
 */
// 使用栈
var decodeString = function (s) {
    const stack = [];
    for (const char of s) {
        // 判断是否为右括号,则出栈
        if (char === "]") {
            let cur;
            // 存储字符集
            let chars = "";
            // 存储数字
            let numberChars = "";
            // 出栈,直到出栈的元素为左括号
            while ((cur = stack.pop()) !== "[") {
                // 将左右括号之间的字符拼接,注:要反这拼;
                chars = cur + chars;
            }
            // 检测左括号之前的数组
            while (true) {
                // 如果是数字则拼接数字,也要反着拼
                if (!isNaN(cur = stack.pop())) {
                    numberChars = cur + numberChars;
                    // 不是数字则跳出循环,并将不是数字的一项进栈
                }else{
                    stack.push(cur);
                    break;
                }
            }
            // 将规则重复的字符入栈,继续循环
            stack.push(chars.repeat(Number(numberChars)));
        } else {
            // 不是右括号则入栈
            stack.push(char);
        }
    }
   return stack.join("");
};


console.log(decodeString("2[abc]3[cd]ef"));