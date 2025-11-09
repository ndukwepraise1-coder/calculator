// Select elements
const display = document.getElementById("display");
const btn = document.getElementById("buttons");
const buttons = document.querySelectorAll("button");

let num1 = null;
let num2 = null;
let sign = null;
let currentInput = "";


// Body styling
document.body.style.backgroundColor = "#ffff";
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";

// Display styling
display.style.width = "345px";
display.style.height = "50px";
display.style.fontSize = "22px";
display.style.textAlign = "right";
display.style.borderRadius = "12px";
display.style.padding = "10px";
display.style.backgroundColor = "#eff2f8ff";
display.style.marginBottom = "15px";
// Buttons container styling
btn.style.display = "grid";
btn.style.gridTemplateColumns = "repeat(4, 65px)";
btn.style.gridGap = "20px";
btn.style.justifyContent = "center";
btn.style.backgroundColor = "#161b22";
btn.style.padding = "15px";
btn.style.borderRadius = "15px";

// Button styling
buttons.forEach(button => {
  button.style.height = "60px";
  button.style.width = "65px";
  button.style.fontSize = "20px";
  button.style.borderRadius = "10px";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#21262d";
  button.style.color = "white";
  button.style.transition = "0.3s";

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#00ffc3";
    button.style.color = "#000";
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#21262d";
    button.style.color = "white";
    button.style.transform = "scale(1)";
  });
});


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      
      currentInput += value;
      display.value = currentInput;

    } else if (["+", "-", "*", "/"].includes(value)) {
      // Operator clicked
      num1 = parseFloat(currentInput);
      sign = value;
      currentInput = "";

    } else if (value === "=") {
      // Equals clicked
      num2 = parseFloat(currentInput);
      let result;

      if (sign === "+") result = num1 + num2;
      else if (sign === "-") result = num1 - num2;
      else if (sign === "*") result = num1 * num2;
      else if (sign === "/") {
        result = num2 === 0 ? "Error" : num1 / num2;
      }

      display.value = result;
      num1 = null;
      num2 = null;
      sign = null;
      currentInput = "";

    } else if (value === "C") {
      num1 = null;
      num2 = null;
      sign = null;
      currentInput = "";
      display.value = "";
    }
  });
});



