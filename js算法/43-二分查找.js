function binarySearch (nums, target) {
    let start = 0,end = nums.length;
    while (start <= end) {
    let center = (end + start) / 2;
      if(nums[center] == target) return center
      if (nums[center] > target) {
          end = center - 1
      }else if(nums[center] < target){
          start = center + 1
      }
    }
    return -1
  }

console.log(binarySearch([-1,0,3,5,9,12],0));