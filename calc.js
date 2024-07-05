function add(){
    return num1 + num2
}

function subtract(){
    return num1 - num2
}

function divide(){
    return num1 / num2;
}

function multiply(){
    return num1 * num2;
}


function operate(){
    if(operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "/"){
        return divide(num1, num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    }
}