/**
 * 17. 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    const keys = {
        1:[],
        2:["a","b","c"],
        3:["d","e","f"],
        4:["g","h","i"],
        5:["j","k","l"],
        6:["m","n","o"],
        7:["p","q","r","s"],
        8:["t","u","v"],
        9:["w","x","y","z"]
    }
    const res = [];
    function backTracking(digits,index,tempArr){
        if(index === digits.length){
            res.push(tempArr.join(""));
            return
        }
        const chars = keys[digits[index]];
        for (let i = 0; i < chars.length; i++) {
            tempArr.push(chars[i]);
            backTracking(digits,index + 1,tempArr);
            tempArr.pop();
        }
    }
    backTracking(digits,0,[]);
    return res;
};

console.log(letterCombinations(""));