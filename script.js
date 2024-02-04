const lastOperation = document.querySelector(".last-operation");
const currentOperation = document.querySelector(".current-operation");
const buttonLayout = document.querySelector(".buttons");

let firstValue = null;
let secondValue = null;
let operator = null;

buttonLayout.addEventListener("click", (e) => {
  let currentValue = e.target.value;
  if (currentValue === "clear") {
    clear();
  } else if (currentValue === "delete") {
    deleteLastOperand;
  } else if (currentValue === "result") {
    firstValue = 5;
    secondValue = 10;
    operator = "+";
    if (firstValue != null && secondValue != null) {
      result();
    }
  } else if (typeof parseInt(currentValue) === "number") {
    handleOperand(parseInt(currentValue));
  } else {
    operator = currentValue;
  }
});

function clear() {
  lastOperation.textContent = "";
  currentOperation.textContent = "0";
  firstValue = null;
  secondValue = null;
  operator = null;
}

function result() {
  firstValue = operate(firstValue, secondValue, operator);
  secondValue = null;
  operator = null;
  currentOperation.textContent = "";
  currentOperation.textContent = `${firstValue}`;
}

const sum = (firstValue, secondValue) => {
  return firstValue + secondValue;
};

const subtract = (firstValue, secondValue) => {
  return firstValue - secondValue;
};

const multiply = (firstValue, secondValue) => {
  return firstValue * secondValue;
};

const divide = (firstValue, secondValue) => {
  if (secondValue === 0) {
    return `ERROR`;
  } else {
    return firstValue / secondValue;
  }
};

function operate(firstValue, secondValue, operator) {
  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);
  switch (operator) {
    case "+":
      return sum(firstValue, secondValue);
    case "-":
      return subtract(firstValue, secondValue);
    case "x":
      return multiply(firstValue, secondValue);
    case "÷":
      return divide(firstValue, secondValue);
  }
}
