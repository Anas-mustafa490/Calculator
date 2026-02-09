const display = document.getElementById("display");
function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    const operators = "+-*/";
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        let result = eval(display.value);
        display.value = Number(result.toFixed(10)).toString();
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/.";

    if (allowedKeys.includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
