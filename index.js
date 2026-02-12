const display = document.getElementById("display");
function append(value) {
    if (display.value === "Error") {
        display.value = "";
    }
const operators = "+-*/";
const lastChar = display.value.slice(-1);
    if (operators.includes(value)) {
        if (display.value === "") return;
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1);
        }
    }
    if (value === ".") {
        const parts = display.value.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes(".")) return;
        if (lastNumber === "") display.value += "0";
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}
function del() {
    if (display.value === "Error") {
        display.value = "";
        return;
    }
    display.value = display.value.slice(0, -1);
}
function calculate() {
    if (display.value === "") return;

    try {
        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }

        if (result % 1 !== 0) {
            result = Number(result.toFixed(10));
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (e) {
    const allowedKeys = "0123456789+-*/.";

    if (allowedKeys.includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        del();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }
});
