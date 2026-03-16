// Display
const firstNum = document.getElementById("firstNum");
const operator = document.getElementById("operator");
const secondNum = document.getElementById("secondNum");

// Operator Buttons
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", () => setOperator("+"));
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => setOperator("-"));
const multiplyBtn = document.getElementById("multiplyBtn");
multiplyBtn.addEventListener("click", () => setOperator("*"));
const divideBtn = document.getElementById("divideBtn");
divideBtn.addEventListener("click", () => setOperator("/"));
const equalBtn = document.getElementById("equalBtn");
equalBtn.addEventListener("click", calculate);

// Number Buttons
const numContainer = document.getElementById("numContainer");
const numBtns = document.querySelectorAll("[value]");
numBtns.forEach((btn) =>
  btn.addEventListener("click", () => addToValue(btn.value)),
);

// Clear & Delete Buttons
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearValues);
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", deleteValue);

const calc = {
  firstValue: "",
  secondValue: "",
  operator: "",
  "+": function () {
    return +this.firstValue + +this.secondValue;
  },
  "-": function () {
    return +this.firstValue - +this.secondValue;
  },
  "*": function () {
    return +this.firstValue * +this.secondValue;
  },
  "/": function () {
    return +this.firstValue / +this.secondValue;
  },
};

function calculate() {
  if (calc.secondValue != "") {
    const result = calc[calc.operator]();
    calc.operator = "";
    calc.secondValue = "";
    calc.firstValue = result;
    updateUI();
  }
}

function setOperator(op) {
  if (calc.firstValue != "") {
    calc.operator = op;
  }
  updateUI();
}

function addToValue(val) {
  if (calc.operator) {
    calc.secondValue += val;
  } else {
    calc.firstValue += val;
  }
  updateUI();
}

function deleteValue() {
  if (calc.secondValue) {
    calc.secondValue = calc.secondValue.slice(0, -1);
  } else if (calc.operator) {
    calc.operator = "";
  } else {
    calc.firstValue = calc.firstValue.slice(0, -1);
  }
  updateUI();
}

function clearValues() {
  calc.firstValue = "";
  calc.operator = "";
  calc.secondValue = "";
  updateUI();
}

function updateUI() {
  firstNum.innerText = calc.firstValue;
  operator.innerText = calc.operator;
  secondNum.innerText = calc.secondValue;
}
