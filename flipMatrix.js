/**Sean invented a game involving a  matrix where each cell of the matrix contains an integer.
 * He can reverse any of its rows or columns any number of times. The goal of the game is to
 * maximize the sum of the elements in the  submatrix located in the upper-left quadrant of the matrix.
 * */

function flipMatrix(arr) {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      sum += Math.max(
        arr[j][i],
        arr[j][n - 1 - i],
        arr[n - 1 - j][i],
        arr[n - 1 - j][n - 1 - i]
      );
    }
  }
  return sum;
}

console.log(
  flipMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
