// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons
let firstNumber = '';
let operation = '';
let secondNumber = '';

// Calculates the result of the current expression if it is valid, then displays the result on the screen
function calcResult() {
  // TODO
}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(op) {
  // TODO
}

// Handles when a number button is pressed
function numberPressed(number) {
  // TODO
}

// Clears the screen
function clearScreen() {
  // TODO
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
}

// Get all the number elements
const numbers = document.querySelectorAll('.number');

// Loop through each number element, add an event listener
for (const number of numbers) {
    number.addEventListener('click', function () {
        console.log('a number pressed');
        console.log(number.innerText);
    });
}

// Get all the number elements
const operators = document.querySelectorAll('.operator');

// Loop through each number element, add an event listener
for (const operator of operators) {
    operator.addEventListener('click', function () {
        console.log('a operator pressed');
        console.log(operator.innerText);
    });
}

//get the decimal, clear, equals

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function () {
    console.log('the decimal was pressed');
    console.log(decimal.innerText)
})

const clearAll = document.querySelector('.clear');
clearAll.addEventListener('click', function () {
    console.log('the clear was pressed');
    console.log(clearAll.innerText)
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', function () {
    console.log('the equals was pressed');
    console.log(equals.innerText)
})