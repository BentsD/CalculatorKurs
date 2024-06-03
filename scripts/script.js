const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        res.value = "Can't divide 0 with 0";
        setTimeout(() => {
        res.value = "";
        }, 1300);
    } else {
        res.value = calculatedValue;
    }
    let result = eval(value);
    addToHistory(value + " = " + result);
}

function liveScreen(enteredValue) {
    if (!res.value) {
        res.value = "";
    }
    res.value += enteredValue;
}

function log(){
    const expression = 'log('+res.value + ')';
    res.value=parseFloat(Math.log10(res.value).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function sqrt(){
    const expression = '√('+res.value + ')';
    res.value=parseFloat(Math.sqrt(res.value).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function pow(){
    const expression = res.value + '^';
    res.value=Math.pow(res.value,2);
    addToHistory(expression + " = " + res.value);
}
function sin() {
    const expression = 'sin(' + res.value + ')';
    res.value = parseFloat((Math.sin(res.value * Math.PI / 180)).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function cos() {
    const expression = 'cos(' + res.value + ')';
    res.value = parseFloat((Math.cos(res.value * Math.PI / 180)).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function tan() {
    const expression = 'tan(' + res.value + ')';
    res.value = parseFloat((Math.tan(res.value * Math.PI / 180)).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function cot() {
    const expression = 'cot(' + res.value + ')';
    res.value = parseFloat((Math.cos(res.value * Math.PI / 180) / Math.sin(res.value * Math.PI / 180)).toFixed(5));
    addToHistory(expression + " = " + res.value);
}
function percentage() {
    const expression = res.value + '%(100)';
    res.value = res.value/100;
    addToHistory(expression + " = " + res.value);
}
function factorial() {
    const expression = res.value + '!';
    var i, num, f;
    f = 1
    num = res.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    res.value = f;
    addToHistory(expression + " = " + res.value);
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
    e.preventDefault();
    if (e.key === "0") {
    res.value += "0";
    } else if (e.key === "1") {
    res.value += "1";
    } else if (e.key === "2") {
    res.value += "2";
    } else if (e.key === "3") {
    res.value += "3";
    } else if (e.key === "4") {
    res.value += "4";
    } else if (e.key === "5") {
    res.value += "5";
    } else if (e.key === "6") {
    res.value += "6";
    } else if (e.key === "7") {
    res.value += "7";
    } else if (e.key === "7") {
    res.value += "7";
    } else if (e.key === "8") {
    res.value += "8";
    } else if (e.key === "9") {
    res.value += "9";
    } else if (e.key === "(") {
    res.value += "(";
    }else if (e.key === ")") {
    res.value += ")";
    }
    
    if (e.key === "+") {
    res.value += "+";
    } else if (e.key === "-") {
    res.value += "-";
    } else if (e.key === "*") {
    res.value += "*";
    } else if (e.key === "/") {
    res.value += "/";
    }

    if (e.key === ".") {
    res.value += ".";
    }

    if (e.key === "Enter") {
    calculate(result.value);
    }

    if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
    }
}

function deleteLast() {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
}

function saveResult() {
    localStorage.setItem('savedResult', document.getElementById('result').value);
}
function insertSavedResult() {
    document.getElementById('result').value += localStorage.getItem('savedResult');
}

function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
        toast.innerHTML = "Calculator";
    }, 1500);
    if (theme.getAttribute("href") === lightTheme) {
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", sunIcon);
    } else {
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", moonIcon);
    }
}

let history = [];
function addToHistory(entry) {
    history.push(entry);
    updateHistory();
}
function updateHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = history.join('<br>');
}
function clearHistory() {
    history = [];
    updateHistory();
}