/**Given a string with different Alphanumeric, retur the alpha who repeated most*/
function repeatedCharacter(str) {
  const elems = {};
  const arr = str.match(/[a-zA-Z]/g);
  let highestCount = 0;
  let repChar;
  for (const element of arr) {
    if (element in elems) {
      elems[element] += elems[element];
    } else {
      elems[element] = 1;
    }

    if (elems[element] > highestCount) {
      repChar = element;
    }
  }
  return repChar;
}

console.log(
  repeatedCharacter("appppaaaaabbbbbbbbsssssssssssssss000000000000000")
);
