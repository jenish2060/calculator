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
  if (secondValue == 0) {
    setTimeout(clear, 1000);
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
      deleteLastOperand(currentValue);
    } else if (currentValue === "result") {
      if (firstValue != "" && secondValue != "" && operator != null) {
        result();
      }
    } else if (checkOperator(currentValue)) {
      handleOperator(currentValue);
    } else {
      handleOperand(currentValue);
    }
  })
);

function deleteLastOperand(value) {
  if (secondValue === "") {
    firstValue = firstValue.substring(0, firstValue.length - 1);
    currentOperation.textContent = `${firstValue}`;
    if (firstValue === "") {
      firstValue = "0";
      currentOperation.textContent = `${firstValue}`;
    }
  } else {
    secondValue = secondValue.substring(0, secondValue.length - 1);
    currentOperation.textContent = `${secondValue}`;
    if (secondValue === "") {
      secondValue = "0";
      currentOperation.textContent = `${secondValue}`;
    }
  }
}

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
        if (firstValue == "") {
          firstValue = "0";
        }
        firstValue = firstValue + value;
      }
    } else {
      firstValue = firstValue + value;
    }
    currentOperation.textContent = `${firstValue}`;
  } else {
    if (value === ".") {
      if (!secondValue.includes(".")) {
        if (secondValue == "") {
          secondValue = "0";
        }
        secondValue = secondValue + value;
      }
    } else {
      secondValue = secondValue + value;
    }
    currentOperation.textContent = `${secondValue}`;
  }
}

function handleOperator(value) {
  if (secondValue == "") {
    updateOperation(value);
  } else if (operatorUsedOnce) {
    if (secondValue != "") {
      result();
      updateOperation(value);
    }
  } else {
    updateOperation(value);
  }
  operatorUsedOnce = true;
}

function updateOperation(value) {
  lastOperation.textContent = "";
  operator = value;
  lastOperation.append(`${firstValue} `);
  lastOperation.append(`${operator} `);
}

function result() {
  lastOperation.textContent = `${firstValue} ${operator} ${secondValue} =`;
  firstValue = operate(firstValue, secondValue, operator);
  if (!Number.isInteger(firstValue) && typeof firstValue !== "string") {
    firstValue = firstValue.toFixed(3);
  }
  firstValue = String(firstValue);
  secondValue = "";
  operator = null;
  operatorUsedOnce = false;
  currentOperation.textContent = `${firstValue}`;
}
