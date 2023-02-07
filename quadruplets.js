/**Given an array of unsorted numbers and a target number,
 * find all unique quadruplets in it, whose sum is equal to the target number.
 */

function quadrupletsSum(arr, target) {
  const len = arr.length;
  if (len < 4) {
    return;
  }
  const sortedArr = arr.sort((a, b) => a - b);
  const quadArr = [];

  for (let i = 0; i < len - 3; i++) {
    let sum = 0;
    let x = i + 1;
    let y = x + 1;
    let z = len - 1;
    while (x < y) {
      if (y >= z) {
        break;
      }
      while (y < z) {
        sum = sortedArr[i] + sortedArr[x] + sortedArr[y] + sortedArr[z];

        if (sum === target) {
          quadArr.push([
            sortedArr[i],
            sortedArr[x],
            sortedArr[y],
            sortedArr[z],
          ]);
          y++;
          z++;
          while (y < z && sortedArr[y] == sortedArr[y - 1]) {
            y++; // skip same element to avoid duplicate quadruplets
          }
          while (y < z && sortedArr[z] == sortedArr[z + 1]) {
            z--; // skip same element to avoid duplicate quadruplets
          }
        } else if (sum > target) {
          z--;
        } else if (sum < target) {
          y++;
        }
      }
      x++;
      y = x + 1;
      z = len - 1;
    }
  }
  return quadArr;
}

console.log(quadrupletsSum([4, 1, 2, -1, 1, -3], 1));
console.log(quadrupletsSum([2, 0, -1, 1, -2, 2], 2));
