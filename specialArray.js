/**You are given an array nums of non-negative integers. nums is considered special if 
 * there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
Notice that x does not have to be an element in nums.
Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, 
the value for x is unique.*/

function specialArray(array) {
  const max = Math.max(...array);
  const len = array.length;
  if (len === 0) {
    return 0;
  }
  let special = len > max ? max : len;

  while (special > 0) {
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (count > special) {
        break;
      }
      if (array[i] >= special) {
        count++;
      }
    }
    if (i === len && count === special) {
      return special;
    }
    special--;
  }
  return -1;
}

console.log(specialArray([0, 4, 3, 0, 4]));
