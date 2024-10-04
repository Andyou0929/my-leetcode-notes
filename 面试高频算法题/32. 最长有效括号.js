/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
    if (!s.length) return 0;
    const dp = new Array(s.length).fill(0);
    let m = 0,
        count = 0;
    const stack = [0];
    for (let i = 0; i < s.length; i++) {
        const top = stack[stack.length - 1];
        if (s[i] === ")" && s[top] === "(") {
            count++;
            dp[i] = dp[i - 1] + 2 + (top - 1 >= 0 ? dp[top - 1] : 0);
            stack.pop();
            m = Math.max(m, dp[i]);
        } else {
            stack.push(i);
            count = 0;
        }
    }
    return m;
};
// 标记法，将有效的括号位置标记为1，最后判断最大连续1的长度
function longestValidParentheses1(s) {
    const stack = [];
    const arr = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ")") {
            const last = stack[stack.length - 1];
            if(stack.length && s[last] === "("){
                arr[i] = arr[last] = 1;
                stack.pop();
            }else{
                stack.push(i);
            }
        } else {
            stack.push(i);
        }
    }
    let max = 0;
    let count = 0;

    const lArr = arr.reduce((pre,cue)=>{
        if(cue === 1){
            count++;
        }else if(cue === 0){
            pre.push(count);
            count = 0;
        }
        return pre;
    },[])
    lArr.push(count);
    return Math.max(...lArr);    
}

console.log(longestValidParentheses1("()(()"));