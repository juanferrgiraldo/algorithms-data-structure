const calPoints = function (ops) {
  const scores = [];
  let sum = 0;
  for (const element of ops) {
    let char = element;
    if (/\d/.test(char)) {
      scores.push(char);
    } else if (char === "+") {
      scores.push(
        Number(scores[scores.length - 1]) + Number(scores[scores.length - 2])
      );
    } else if (char === "D") {
      scores.push(Number(scores[scores.length - 1]) * 2);
    } else if (char === "C") {
      scores.pop();
    }
  }
  for (const element of scores) {
    sum += Number(element);
  }
  return sum;
};

console.log(calPoints([5, "-2", 4, "C", "D", 9, "+", "+"]));
