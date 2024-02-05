const lastOperation = document.querySelector(".last-operation");
const currentOperation = document.querySelector(".current-operation");
const buttonLayout = document.querySelectorAll("button");

let firstValue = "0";
let secondValue = "";
let operator = null;
let operatorUsedOnce = false;

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
  firstValue = Number(firstValue);
  secondValue = Number(secondValue);
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

function checkOperator(value) {
  switch (value) {
    case "+":
      return true;
    case "-":
      return true;
    case "x":
      return true;
    case "÷":
      return true;
  }
  return false;
}

buttonLayout.forEach((button) =>
  button.addEventListener("click", (e) => {
    let currentValue = e.target.value;
    if (currentValue === "clear") {
      clear();
    } else if (currentValue === "delete") {
      deleteLastOperand;
    } else if (currentValue === "result") {
      if (firstValue != null && secondValue != "" && operator != null) {
        result();
      }
    } else if (checkOperator(currentValue)) {
      handleOperator(currentValue);
    } else {
      handleOperand(currentValue);
    }
  })
);

function clear() {
  firstValue = "0";
  secondValue = "";
  operator = null;
  operatorUsedOnce = false;
  lastOperation.textContent = "";
  currentOperation.textContent = `${firstValue}`;
}

function handleOperand(value) {
  if (operator === null) {
    if (firstValue === "0") {
      firstValue = "";
    }
    if (value === ".") {
      if (!firstValue.includes(".")) {
        firstValue = firstValue + value;
      }
    } else {
      firstValue = firstValue + value;
    }
    currentOperation.textContent = `${firstValue}`;
  } else {
    secondValue = secondValue + value;
    currentOperation.textContent = `${secondValue}`;
  }
}

function handleOperator(value) {
  if (operatorUsedOnce) {
    if (secondValue != "") {
      result();
      lastOperation.textContent = "";
      operator = value;
      lastOperation.append(`${firstValue} `);
      lastOperation.append(`${operator} `);
    }
  } else {
    lastOperation.textContent = "";
    operator = value;
    lastOperation.append(`${firstValue} `);
    lastOperation.append(`${operator} `);
  }
  operatorUsedOnce = true;
}

function result() {
  lastOperation.textContent = `${firstValue} ${operator} ${secondValue} =`;
  firstValue = operate(firstValue, secondValue, operator);
  if (!Number.isInteger(firstValue)) {
    firstValue = firstValue.toFixed(3);
  }
  secondValue = "";
  operator = null;
  operatorUsedOnce = false;
  currentOperation.textContent = "";
  currentOperation.textContent = `${firstValue}`;
}
