let operandArr = [];
let displayValue = "";

const resetButton = document.querySelector(".allClear");
const operands = Array.from(document.querySelectorAll(".operand"));
const operators = Array.from(document.querySelectorAll(".operator"));
const display = document.querySelector(".display");

const evaluate = (operator, currentDisplay) => {
  console.log("We made it");
  if (operandArr.length === 0) {
    operandArr.push(parseInt(currentDisplay));
    console.log(operandArr);
  } else if (operandArr.length === 1) {
    displayValue = parseInt(
      operate(operator, operandArr.pop(), parseInt(currentDisplay))
    );
    operandArr.push(displayValue);
    display.textContent = displayValue;
    displayValue = "";
  }
};

const updateDisplay = (currentValue) => {
  displayValue = currentValue;
  display.textContent = displayValue;
};

resetButton.addEventListener("click", () => {
  displayValue = "";
  display.textContent = 0;
  operandArr = [];
});

operands.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (operandArr.length === 1) {
      updateDisplay("");
      displayValue = displayValue + event.target.textContent;
      updateDisplay(displayValue);
    } else {
      displayValue = displayValue + event.target.textContent;
      updateDisplay(displayValue);
    }
  });
});

operators.forEach((element) => {
  element.addEventListener("click", (event) => {
    evaluate(event.target.textContent, displayValue);
  });
});

// Math functions
// Returns the result of the math problem
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    updateDisplay("Don't even try it!");
    return;
  }
  return num1 / num2;
};

// Determine which math function to call
// Returns result of math operation
const operate = (operator, num1, num2) => {
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
};
