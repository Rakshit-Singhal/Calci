let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

const display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    if (currentInput.includes('+')) {
        [firstOperand, secondOperand] = currentInput.split('+');
        display.value = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (currentInput.includes('-')) {
        [firstOperand, secondOperand] = currentInput.split('-');
        display.value = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (currentInput.includes('*')) {
        [firstOperand, secondOperand] = currentInput.split('*');
        display.value = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (currentInput.includes('/')) {
        [firstOperand, secondOperand] = currentInput.split('/');
        display.value = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
}

