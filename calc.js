const display = document.querySelector("#display");
let numbtns = document.querySelectorAll(".nums");

let num1 = '';
let operator = '';
let num2 = '';
let displayVal = '';

numbtns.forEach(numbtn => {
    numbtn.addEventListener('click', () =>{
        updateDisplay(numbtn.value);
    })
})

let updateDisplay = (numBtnVal) => {
    display.value += numBtnVal;
    displayVal = display.value;
}

const clearBtn = document.querySelector("#clear").onclick = () => {
    display.value = '';
    displayVal = '';
    operator = '';
    num1 = '';
    num2 = '';
};

function clearDisplay(){
    display.value = "";
    displayVal = "";
}

let opbtns = document.querySelectorAll(".op").forEach(opbtn => {
    opbtn.addEventListener('click', () => {
        operator = opbtn.value;
        num1 += displayVal;
        clearDisplay();
    })
})

const equalBtn = document.querySelector("#equal").onclick = () => {
    num2 += displayVal;
    clearDisplay();
    operate();
}

function add(){
    return +num1 + +num2;
}

function subtract(){
    return +num1 - +num2;
}

function divide(){
    return +num1 / +num2;
}

function multiply(){
    return +num1 * +num2;
}

function operate(){
    if(operator == "+"){
        display.value = add(num1, num2);
    } else if (operator == "-"){
        display.value = subtract(num1, num2);
    } else if (operator == "/"){
        display.value = divide(num1, num2);
    } else if (operator == 'x'){
        display.value = multiply(num1, num2);
    }
}