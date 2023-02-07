/**Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.*/

function sortSubarray(array) {
  let low = 0;
  let high = array.length - 1;

  while (low < array.length && array[low] < array[low + 1]) {
    low++;
  }
  if (low === array.length - 1) {
    return 0;
  }
  while (high >= 0 && array[high] > array[high - 1]) {
    high--;
  }

  let subArr = array.slice(low, high + 1);
  let max = Math.max(...subArr);
  let min = Math.min(...subArr);

  let i = low - 1;
  while (i >= 0) {
    if (array[i] > min) {
      low = i;
    }
    i--;
  }
  let j = high + 1;
  while (j < array.length) {
    if (array[j] < max) {
      high = j;
    }
    j++;
  }

  return high - low + 1;
}

console.log(sortSubarray([1, 2, 3]));
