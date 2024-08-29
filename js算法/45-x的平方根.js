function mySqrt(x) {
    if (x <= 1) return x;
    let left = 0;
    let right = x;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let result = mid * mid;
      if (result === x) {
        return mid;
      } else if (result <= x) {
        left = mid + 1; // 返回右边的
      } else {
        right = mid - 1; // 返回左边的
      }
    }
    return right;
  }
  
console.log(mySqrt(11));
  