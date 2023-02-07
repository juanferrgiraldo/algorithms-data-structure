/**Given two strings containing backspaces (identified by the character ‘#’),
 * check if the two strings are equal.
 */
function checkStrBackspaces(str1, str2) {
  const newStr1 = backspaces(str1);
  const newStr2 = backspaces(str2);
  return newStr1 === newStr2;
}

function backspaces(str) {
  const newArr = str.split("");
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i + 1] === "#") {
      newArr.splice(i, 2);
      i -= 2;
    }
  }
  return newArr.join("");
}

console.log(checkStrBackspaces("xp#", "xy#z#"));
