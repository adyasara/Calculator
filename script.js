let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("result").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("result").value = displayValue;
}

function deleteChar() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("result").value = displayValue;
}

function calculate() {
  try {
    let result;
    if (displayValue.includes("sin(")) {
      const startIndex = displayValue.indexOf("(") + 1;
      const endIndex = displayValue.lastIndexOf(")");
      const angle = parseFloat(displayValue.slice(startIndex, endIndex));
      result = Math.sin((angle * Math.PI) / 180);
    } else if (displayValue.includes("cos(")) {
      const startIndex = displayValue.indexOf("(") + 1;
      const endIndex = displayValue.lastIndexOf(")");
      const angle = parseFloat(displayValue.slice(startIndex, endIndex));
      result = Math.cos((angle * Math.PI) / 180);
    } else if (displayValue.includes("tan(")) {
      const startIndex = displayValue.indexOf("(") + 1;
      const endIndex = displayValue.lastIndexOf(")");
      const angle = parseFloat(displayValue.slice(startIndex, endIndex));
      result = Math.tan((angle * Math.PI) / 180);
    } else if (displayValue.includes("log(")) {
      const startIndex = displayValue.indexOf("(") + 1;
      const endIndex = displayValue.lastIndexOf(")");
      const number = parseFloat(displayValue.slice(startIndex, endIndex));
      result = Math.log10(number);
    } else if (displayValue.includes("sqrt(")) {
      const startIndex = displayValue.indexOf("(") + 1;
      const endIndex = displayValue.lastIndexOf(")");
      const number = parseFloat(displayValue.slice(startIndex, endIndex));
      result = Math.sqrt(number);
    } else {
      result = Function(`'use strict'; return (${displayValue})`)();
    }
    document.getElementById("result").value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    displayValue = "";
  }
}
