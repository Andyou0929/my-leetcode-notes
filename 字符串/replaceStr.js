/**
 * 54. 替换数字
 * 给定一个字符串 s，它包含小写字母和数字字符，请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为number。 
 * 例如，对于输入字符串 "a1b2c3"，函数应该将其转换为 "anumberbnumbercnumber"。
 * @param {string} s 
 * @returns {string} 
 */
const replaceStr = function name(s) {
    return s.replace(/[0-9]{1}/g,"number");
}
console.log(replaceStr("a12b2c3"));