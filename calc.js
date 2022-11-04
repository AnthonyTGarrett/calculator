const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(".display");
  display.value = calculator.displayValue;
}

updateDisplay();

function resetCalc() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

const keys = document.querySelector(".keypad");
keys.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
});

// Math functions
// Returns the result of the math problem
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    updateDisplay("Don't even try it!");
    return;
  }
  return num1 / num2;
}

// Determine which math function to call
// Returns result of math operation
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}
