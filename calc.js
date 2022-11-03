let displayValue = "";

const buttons = Array.from(document.querySelectorAll(".operand"));
const display = document.querySelector(".display");

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (displayValue == "") {
      display.textContent = displayValue;
    }
    displayValue = e.target.textContent;
    display.textContent = display.textContent + displayValue;
  });
});

console.log(buttons);

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
  return num1 / num2;
};

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
