function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if ((num2) == 0)
            {
                alert('Invalid calculation')
                break;
            }
            else {
                result = num1 / num2;
                break;
            }
        case "^":
            result = Math.pow(num1, num2);
            break;
        default:
            result = "Không hợp lệ";
    }

    document.getElementById("result").value = result;
}
