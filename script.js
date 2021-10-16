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
  if (operator === "+") {
    return add(a, b);
  }

  if (operator === "-") {
    return subtract(a, b);
  }

  if (operator === "x") {
    return multiply(a, b);
  }

  if (operator === "/") {
    return divide(a, b);
  }
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
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");

for (const button of numberButtons) {
  button.addEventListener("click", firstOrSecondNum);
}

for (const button of operatorButtons) {
  button.addEventListener("click", (e) => {
    if (firstNum) {
      operatorOnCalc = `${e.target.textContent}`;
    }
  });
}

equalButton.addEventListener("click", () => {
  if (!operatorOnCalc) {
    return document.querySelector(".screen").textContent;
  }

  if (secondNum) {
    const answer = operate(operatorOnCalc, firstNum, secondNum);
    document.querySelector(".screen").textContent = `${answer}`;
    firstNum = answer;
    secondNum = "";
    operatorOnCalc = "";
  }
});

clearButton.addEventListener("click", () => {
  document.querySelector(".screen").textContent = "";
  firstNum = "";
  secondNum = "";
});

backspaceButton.addEventListener("click", () => {
  let screen = document.querySelector(".screen").textContent;
  let numberBackspace = screen.split("").slice(0, -1);

  document.querySelector(".screen").textContent = `${numberBackspace.join("")}`;

  operatorOnCalc
    ? (secondNum = document.querySelector(".screen").textContent)
    : (firstNum = document.querySelector(".screen").textContent);
});
