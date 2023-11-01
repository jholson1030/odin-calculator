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
    let i = 0;
    while (i < expressionArray.length) {
        if (expressionArray[i] === '*' || expressionArray[i] === '/') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result); 
            continue;
        } 
        i++;
    }
    
    // Next handle addition and subtraction
    i = 0;
    while (i < expressionArray.length) {
        if (expressionArray[i] === '+' || expressionArray[i] === '-') {
            let result = simpleOperate(expressionArray[i - 1], expressionArray[i + 1], expressionArray[i]);
            expressionArray.splice(i - 1, 3, result); 
            continue;  
        } 
        i++
    }
    return expressionArray[0];
    
}

function simpleOperate(num1, num2, operator) {
num1 = parseFloat(num1);
num2 = parseFloat(num2);

    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Broken...';
        default: return 'Unknown operator';
    }
}

// Export functions to test
module.exports = { operate, simpleOperate };

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
            display.textContent += event.target.getAttribute('data-value');
        } else if (targetType.includes('operator')) {
            if (currentNumber !== '') {
                expression.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            expression.push(event.target.getAttribute('data-value'));
            display.textContent += ' ' + event.target.getAttribute('data-value') + ' ';
        } else if (targetType.includes('equal')) {
            if (currentNumber !== '') {
                expression.push(parseFloat(currentNumber));
            }
            let result = operate(expression);
            display.textContent = result;
            // Clears the expression array for the next calculation
            expression = [];
            // Stores the result in case user wants to use it in the next calculation
            currentNumber = result.toString();
        } else if (targetType.includes('clear')) {
            expression = [];
            currentNumber= '';
            display.textContent = '';
        }
    });
}

// Event listeners



document.addEventListener('DOMContentLoaded', function() {
    populate();
});

const { operate, simpleOperate } = require('./calculator');