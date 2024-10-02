/**
 * 1201. 丑数 III
 * 丑数是可以被 a 或 b 或 c 整除的 正整数 。
 * 给你四个整数：n 、a 、b 、c ，请你设计一个算法来找出第 n 个丑数。
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// 解题思路，二分法
/* 
    1~M中共有多少个丑数 
    公式： (M / a) + (M /b) + (M / c) - (M / a_b最大公约数) - (M / a_c最大公约数) - (M / b_c最大公约数) + (M / a_c_d的大公约数)
    肯能会出现越界问题：需要使用bigInt
*/
var nthUglyNumber = function (n, a, b, c) {
    let _n = BigInt(n);
    let _a = BigInt(a);
    let _b = BigInt(b);
    let _c = BigInt(c);

    function min(x, y, z) {
        let m = x;
        if (m > y) {
            m = y;
        }
        if (m > z) {
            m = z;
        }
        return m;
    }
    // 求最小公倍数
    function gcd(x, y) {
        if (y === 0n) {
            return x;
        } else {
            return gcd(y, x % y);
        }

    }
    // 求最大公约数
    function lcm(x, y) {
        return x * y / gcd(x, y);
    }

    function isUglyNum(val) {
        return val % _a === 0n || val % _b === 0n || val % _c === 0n;
    }

    let r = _n * min(_a, _b, _c);
    let l = 0n;
    let a_b = BigInt(lcm(_a, _b));
    let a_c = BigInt(lcm(_a, _c));
    let b_c = BigInt(lcm(_b, _c));
    let a_b_c = BigInt(lcm(a_b, _c));
    while (l < r) {
        let mid = l + (r - l) / 2n;
        let count = mid / _a + mid / _b + mid / _c - (mid / a_b) - (mid / a_c) - (mid / b_c) + (mid / a_b_c);
        if (count === _n) {
            if (isUglyNum(mid)) {
                return Number(mid);
            } else {
                r = mid - 1n;
            }
        }
        if (count < _n) {
            l = mid + 1n;
        } else {
            r = mid - 1n;
        }
    }
    return Number(isUglyNum(l) ? l : -1);
};

console.log(nthUglyNumber(3,2,3,5));