const lastOperation = document.querySelector(".last-operation");
const currentOperation = document.querySelector(".current-operation");
const buttonLayout = document.querySelector(".buttons");

function appendLastOperation(value) {
  lastOperation.append(` ${value}`);
}

function appendCurrentOperation(value) {
  currentOperation.textContent = "";
  if (Number.isInteger(value)) {
    currentOperation.append(`${value}`);
  } else {
    currentOperation.append(`${value.toFixed(3)}`);
  }
}

buttonLayout.addEventListener("click", (e) => {
  console.log(e.target.value);
});
