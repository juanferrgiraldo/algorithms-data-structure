/**Note: Try to solve this task in-place (with O(1) additional memory),
 * since this is what you'll be asked to do during an interview.
You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
*/

function rotateImage(a) {
  let n = a.length - 1;
  for (let i = 0; i < a.length; i++) {
    let aux;
    let aux2;
    aux = a[i][i]; //1 | 5 | 9
    a[i][i] = a[n - i][i]; //1 = 7 | 5 = 5 | 9 = 3
    aux2 = a[i][n - i]; //3 | 5 | 7
    a[i][n - i] = aux; //3 = 1 | 5 = 5 | 7 = 9
    a[n - i][i] = a[n - i][n - i]; //7 = 9 | 5 = 5 | 3 = 1
    a[n - i][n - i] = aux2; //9 = 3 | 5 = 5 | 1 = 7
    console.log(a);
  }
}

rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
