// Variables for two numbers and an operator

let firstNum;
let operator;
let secondNum;
let display = document.querySelector('#display');

let zero = document.querySelector('.zero');
zero === 0;
let one = document.querySelector('.one');
one === 1;
let two = document.querySelector('.two');
two === 2;
let three = document.querySelector('.three');
three === 3;
let four = document.querySelector('.four');
four === 4;
let five = document.querySelector('.five');
five === 5;
let six = document.querySelector('.six');
six === 6;
let seven = document.querySelector('.seven');
seven === 7;
let eight = document.querySelector('.eight');
eight === 8;
let nine = document.querySelector('.nine');
nine === 9;




// Function to take two numbers and an operator then calls another function on the numbers

function operate(num1, num2, operator) {
    // This function will take an operator and two numbers and call one of the operator functions on it
    if (operator = '+') {
        return add(num1, num2);
    } else if (operator = '-') {
        return subtract(num1, num2);
    } else if (operator = '*') {
        return multiply(num1, num2);
    } else if (operator = '/') {
        if (num2 === 0) {
            alert("***Don't be a dummy, you can't divide by zero!!!***");
        } else {
            return divide(num1, num2);
        }
    } else {
        alert("***Invalid operator***");
    }
}


function populate() {
    // This function will make the buttons clicked display on the display div
    
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

// Event listeners

const equalsButton = document.querySelector('#equal');
equalsButton.addEventListener('click', function() {
    let result = operate(firstNum, secondNum, operator);
    display.textContent = result;
})