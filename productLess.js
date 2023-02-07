/**Given an array with positive numbers and a positive target number,
 * find all of its contiguous subarrays whose product is less than the target number.
 */
function productLess(array, target) {
  const subArrays = [];

  for (let i = 0; i < array.length; i++) {
    const newSub = [];
    let left = i + 1;
    let prod = 1;
    prod *= array[i];
    if (prod < target) {
      newSub.push(array[i]);
      subArrays.push(newSub.slice());
    }
    while (left < array.length) {
      prod *= array[left];
      if (prod < target) {
        newSub.push(array[left]);
        subArrays.push(newSub);
        left++;
      } else {
        break;
      }
    }
  }
  return subArrays;
}

console.log(productLess([2, 5, 3, 10], 30));
