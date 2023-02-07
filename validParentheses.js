const validParentheses = function (str) {
  const arr = [];

  for (const element of str) {
    let char = element;
    let lastChar = arr[arr.length - 1];

    if (char === "(" || char === "[" || char === "{") {
      arr.push(char);
    } else {
      if (arr.length <= 0) {
        return false;
      }
      if (
        (char === ")" && "(" === lastChar) ||
        (char === "]" && "[" === lastChar) ||
        (char === "}" && "{" === lastChar)
      ) {
        arr.pop();
      }
    }
  }
  return arr.length > 0 ? false : true;
};

console.log(validParentheses("()}[]"));
