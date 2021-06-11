function inpt(val) {
    calc.display.value += val;
}

function clr(x) {
    calc.display.value = x;
}

function eql() {
    var tot = eval(calc.display.value)
    if (calc.display.value === null) {
        calc.display.value = "Error";
    } else {
        calc.display.value = tot;
    }
}