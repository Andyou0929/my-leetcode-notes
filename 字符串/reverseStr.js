// @ts-nocheck
/**
 * 541. 反转字符串 II
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 分组再反转
var reverseStr = function(s, k) {
    // 将字符串每一项存入数组
    let arr = s.split("");
    let useArr =[];
    // 根据2k,分组
    while(arr.length){
        useArr.push(arr.splice(0,2*k));
    }
    // 循环每一组，将每一组的前k个元素反转
    for (const itemArr of useArr) {
        if (itemArr.length === 1) continue;
        let i = 0;j = k - 1;
        while (i <= j) {
            [itemArr[i],itemArr[j]] = [itemArr[j],itemArr[i]];
            i++,j--;
        }
    }
    return useArr.flat(Infinity).join("");
};
// 快慢指针
var reverseStr1 = function(s, k) {
    let arr = s.split("");
    let fast = slow = 0;
    while(fast < s.length - 1){
        fast += (2*k);
        // 快指针到达2k位置
        if ((fast) % (2 * k) === 0 || fast >= s.length - 1) {
            let i = slow,j = slow + k - 1;
            // 慢指针进行反转k个元素
            while(i <= j){
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++,j--;
            }
            // 将满指针位置指向快指针位置，找下一个2k
            slow = fast;
        }
    }
    return arr.join("");
    
};
console.log(reverseStr1("abcdabcdab",3));