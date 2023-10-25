// Variables for two numbers and an operator

let firstNum = null;
let operator = null;
let secondNum = null;
let display = document.querySelector('#display');
let displayValue = [];

let zero = document.querySelector('.zero');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');




// Function to take two numbers and an operator then calls another function on the numbers

function operate(num1, num2, operator) {
    // This function will take an operator and two numbers and call one of the operator functions on it
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        if (num2 === 0) {
            display.textContent = "***Don't be a dummy, you can't divide by zero!!!***";
        } else {
            return divide(num1, num2);
        }
    } else {
        display.textContent = "***Invalid operator***";
    }
}


function populate() {
    // This function will make the buttons clicked display on the display div
    let buttons = document.querySelector('#buttons-container');
    console.log(buttons);
    buttons.addEventListener('click', function(event) {
        if (event.target.classList.contains('number')) {
            let numberValue = event.target.getAttribute('data-value');
            display.innerHTML += numberValue;
            displayValue += [[numberValue],];
            console.log(displayValue);
            console.log('number');
        } else if (event.target.classList.contains('add')) {
            display.innerHTML += ' + ';
            firstNum = [displayValue];
            displayValue = [];
            operator = 'add';
            console.log(firstNum);
            console.log('plus');
        } else if (event.target.classList.contains('subtract')) {
            display.innerHTML += ' - ';
            firstNum = [displayValue];
            displayValue = [];
            operator = 'minus';
            console.log(firstNum);
            console.log('minus');
        } else if (event.target.classList.contains('multiply')) {
            display.innerHTML += ' * ';
            firstNum = [displayValue];
            displayValue = [];
            operator = 'multiply';
            console.log(firstNum);
            console.log('times');
        } else if (event.target.classList.contains('divide')) {
            display.innerHTML += ' / ';
            firstNum = [displayValue];
            displayValue = [];
            operator = 'divide';
            console.log(firstNum);
            console.log('divided by');
        } else if (event.target.classList.contains('equal')) {
            display.innerHTML += ' = ';
            secondNum = [displayValue];
            displayValue = [];
            if (operator === 'add') {
                display.innerHTML = add(firstNum, secondNum);

            }
            console.log('equals');
        } else if (event.target.classList.contains('clear')) {
            displayValue = [];
            firstNum = [];
            secondNum = [];
            operator = [];
        }
    });
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

const equalsButton = document.querySelector('.equal');
equalsButton.addEventListener('click', function() {
    let result = operate(firstNum, secondNum, operator);
    display.textContent = result;
});

document.addEventListener('DOMContentLoaded', function() {
    populate();
});