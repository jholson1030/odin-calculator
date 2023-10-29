// Variables for two numbers and an operator

let firstNum = '';
let operator = null;
let secondNum = '';
let display = document.querySelector('#display');
let displayValue = '';

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

function operate(expressionArray) {
    // Handle multiplication and division first
    for (let i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === '*' || expressionArray[i] === '/') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result);
            i--;
        }
    }
    
    // Next handle addition and subtraction
    for (let i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === '+' || expressionArray[i] === '-') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result);
            i--;
        }
    }
    return expressionArray[0];
    
}

function simpleOperate(num1, num2, operator) {
    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Broken...';
        default: return 'Unknown operator';
    }
}

function populate() {
    // This function will make the buttons clicked display on the display div
    let expression = [];
    let currentNumber = '';

    let buttons = document.querySelector('#buttons-container');
    console.log(buttons);
    buttons.addEventListener('click', function(event) {
        let targetType = event.target.className;

        if (targetType.includes('number')) {
            currentNumber += event.target.getAttribute('data-value');
            display.innerHTML += numberValue;
            displayValue += numberValue;
            console.log(displayValue);
            console.log('number');
        } else if (event.target.classList.contains('add')) {
            display.innerHTML += ' + ';
            firstNum = displayValue;
            displayValue = '';
            operator = '+';
            console.log(firstNum);
            console.log('plus');
        } else if (event.target.classList.contains('subtract')) {
            display.innerHTML += ' - ';
            firstNum = displayValue;
            displayValue = '';
            operator = '-';
            console.log(firstNum);
            console.log('minus');
        } else if (event.target.classList.contains('multiply')) {
            display.innerHTML += ' * ';
            firstNum = displayValue;
            displayValue = '';
            operator = '*';
            console.log(firstNum);
            console.log('times');
        } else if (event.target.classList.contains('divide')) {
            display.innerHTML += ' / ';
            firstNum = displayValue;
            displayValue = '';
            operator = '/';
            console.log(firstNum);
            console.log('divided by');
        } else if (event.target.classList.contains('equal')) {
            display.innerHTML += ' = ';
            secondNum = displayValue;
            displayValue = '';
            let result = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
            display.textContent = result;
            console.log('equals');
        } else if (event.target.classList.contains('clear')) {
            displayValue = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            display.textContent = '';
        }
    });
}

// Event listeners



document.addEventListener('DOMContentLoaded', function() {
    populate();
});