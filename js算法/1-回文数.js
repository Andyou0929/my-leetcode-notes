/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let flag = ''
    for(let i = str.length -1;i >= 0;i--){
        flag += str.charAt(i)
    }
    return str === flag
};

console.log(isPalindrome(121));