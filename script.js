const lastOperation = document.querySelector(".last-operation");
const currentOperation = document.querySelector(".current-operation");
const buttonLayout = document.querySelector(".buttons");

let firstValue = 0;
let secondValue = null;
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

buttonLayout.addEventListener("click", (e) => {
  let currentValue = e.target.value;
  if (currentValue === "clear") {
    clear();
  } else if (currentValue === "delete") {
    deleteLastOperand;
  } else if (currentValue === "result") {
    if (firstValue != null && secondValue != null && operator != null) {
      result();
    }
  } else if (checkOperator(currentValue)) {
    handleOperator(currentValue);
    console.log(currentValue);
  } else {
    handleOperand(parseInt(currentValue));
  }
});

function clear() {
  lastOperation.textContent = "";
  currentOperation.textContent = "0";
  firstValue = 0;
  secondValue = null;
  operator = null;
  operatorUsedOnce = false;
}

function handleOperand(value) {
  if (firstValue === null || firstValue === 0) {
    currentOperation.textContent = "";
  }
  if (firstValue === null || firstValue === 0 || operator === null) {
    firstValue = value;
    currentOperation.textContent = `${firstValue}`;
  } else {
    secondValue = value;
    lastOperation.append(` ${operator}`);
    currentOperation.textContent = `${secondValue}`;
  }
}

function handleOperator(value) {
  lastOperation.textContent = "";
  if (operatorUsedOnce) {
    result();
    lastOperation.textContent = "";
  }
  operator = value;
  lastOperation.append(` ${firstValue}`);
  currentOperation.textContent = ` ${operator}`;
  operatorUsedOnce = true;
}

function result() {
  firstValue = operate(firstValue, secondValue, operator);
  if (!Number.isInteger(firstValue)) {
    firstValue = firstValue.toFixed(3);
  }
  lastOperation.append(` ${secondValue} =`);
  secondValue = null;
  operator = null;
  operatorUsedOnce = false;
  currentOperation.textContent = "";
  lastOperation.textContent = `${firstValue}`;
}
