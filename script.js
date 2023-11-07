// Variables for two numbers and an operator

let firstNum = '';
let operator = null;
let secondNum = '';
let display = document.querySelector('#display');
let displayValue = '';





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

// Calculate factor based on the operands
const factor = Math.pow(10, Math.max(decimalPlaces(num1), decimalPlaces(num2)));

    switch(operator) {
        case '+':
            return (Math.round(num1 * factor) + Math.round(num2 * factor)) / factor;
        case '-':
            return (Math.round(num1 * factor) - Math.round(num2 * factor)) / factor;
        case '*':
        // For multiplication, the factor needs to be squared
            return (num1 * factor) * (num2 * factor) / (factor * factor);
        case '/':
        // Only the numerator is multiplied by the factor
            return (num1 * factor) / (num2);
        default: 
            return 'Unknown operator';
    }
}

// Helper function to find the number of decimal places
function decimalPlaces(num) {
    const match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(
        0,
        // Number of digits to the right of the decimal point
        (match[1] ? match[1].length : 0) - 
        // Adjust for scientific notation
        (match[2] ? +match[2] : 0)
    );
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
        } else if (targetType.includes('point')) {
            if (!currentNumber.includes('.')) {
                currentNumber += '.';
                display.textContent += '.';
            }
        } else if (targetType.includes('backspace')) {
            if (currentNumber !== '') {
                // Remove last number from currentNumber
                currentNumber = currentNumber.slice(0, -1);
                // Update display
                display.textContent = display.textContent.slice(0, -1);
            } else if (expression.length > 0) {
                // Remove last entry from expression
                let removed = expression.pop();
                // Check if it was a number or an operator
                if (typeof removed === 'number') {
                    // If it was a number then make it the currentNumber and remove the digits from the display
                    currentNumber = removed.toString().slice(0, -1);
                    let removedLength = removed.toString.length;
                    display.textContent = display.textContent.slice(0, -removedLength);
                } else {
                    // If it was an operator, just remove the operator from the display and the  spaces around it
                    display.textContent = display.textContent.slice(0, -3);
                }
            }
        }
    });
}

// Event listeners



document.addEventListener('DOMContentLoaded', function() {
    populate();
});

