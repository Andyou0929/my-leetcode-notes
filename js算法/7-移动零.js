function moveZeroes(nums) {
    let zeroLen = 0;
    nums = nums.filter((item) => {
      if (item === 0) {
        zeroLen++;
      } else {
        return item;
      }
    });
    for (let i = 0; i < zeroLen; i++) {
      nums.push(0);
    }
    return nums
  }
  
  console.log(moveZeroes([0, 1, 0, 3, 12]));