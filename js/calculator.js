const calc = {
  firstValue: "43",
  secondValue: "12",
  operator: "*",
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
  const result = calc[calc.operator]();
  calc.operator = "";
  calc.secondValue = "";
  calc.firstValue = result;
  updateUI();
}

function setOperator(op) {
  calc.operator = op;
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

function deleteVal() {
  if (calc.secondValue != "") {
    calc.secondValue = calc.secondValue.slice(0, -1);
  } else if (calc.operator != "") {
    calc.operator = "";
  } else {
    calc.firstValue = calc.firstValue.slice(0, -1);
  }
  updateUI();
}

function updateUI() {
  // Update
  // Upd First Number
  // Upd Operator
  // Upd Second Number
}
