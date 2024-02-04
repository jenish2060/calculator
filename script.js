const lastOperation = document.querySelector(".last-operation");
const currentOperation = document.querySelector(".current-operation");
const buttonLayout = document.querySelector(".buttons");

buttonLayout.addEventListener("click", (e) => {
  let currentValue = e.target.value;
  if (currentValue === "clear") {
    clear();
  }
});

function clear() {
  lastOperation.textContent = "";
  currentOperation.textContent = "0";
}

const sum = (firstValue, secondValue) => {
  return firstValue + secondValue;
};

const subtract = (firstValue, secondValue) => {
  return firstValue - secondValue;
};

const multiply = (firstValue, secondValue) => {
  return firstValue + secondValue;
};

const divide = (firstValue, secondValue) => {
  if (secondValue === 0) {
    return `ERROR`;
  } else {
    return firstValue / secondValue;
  }
};
