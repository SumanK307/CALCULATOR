function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = " ";
    document.getElementById("result").innerText = "";
}
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch {
        document.getElementById("result").innerText = "Error";
    }
}