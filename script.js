function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

function operate(operator, a, b) {
  return operator === "+"
    ? add(a, b)
    : operator === "-"
    ? subtract(a, b)
    : operator === "*"
    ? multiply(a, b)
    : operator === "/"
    ? divide(a, b)
    : false;
}
