function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (b == 0) {
    return "Can't Divide by Zero";
  }
  return Number(a) / Number(b);
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

function firstOrSecondNum(e) {
  if (!operatorOnCalc) {
    firstNum += `${e.target.textContent}`;
    document.querySelector(".screen").textContent = `${firstNum}`;
  } else if (firstNum && operatorOnCalc) {
    const clearScreen = document.querySelector(".screen");
    clearScreen.textContent = "";

    secondNum += `${e.target.textContent}`;
    document.querySelector(".screen").textContent = `${secondNum}`;
  } else {
    secondNum += `${e.target.textContent}`;
    document.querySelector(".screen").textContent = `${secondNum}`;
  }
}

let firstNum = "";
let secondNum = "";
let operatorOnCalc = "";

// Add click listeners
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

for (const button of numberButton) {
  button.addEventListener("click", firstOrSecondNum);
}

for (const button of operatorButton) {
  button.addEventListener("click", (e) => {
    operatorOnCalc = `${e.target.textContent}`;
  });
}

equalButton.addEventListener("click", () => {
  const answer = operate(operatorOnCalc, firstNum, secondNum);
  document.querySelector(".screen").textContent = `${answer}`;
  firstNum = answer;
  secondNum = "";
  operatorOnCalc = "";
});
