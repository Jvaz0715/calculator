// One approach is to store our two numbers and one operation as strings so that 
// we can easily add characters as the user presses buttons
let firstNumber = ''
let operation = '';
let secondNumber = '';
// all of numbers buttons
const numberButtons = document.querySelectorAll(".number");// this is good don't touch
//add event listeners to each number
for (const number of numberButtons) {
    number.addEventListener('click', function (){
        display.innerHTML = number.innerHTML
    })
}


//all of the operations
const operatorButtons = document.querySelectorAll(".operator");
//add event listener to each operator
for (const operator of operatorButtons) {
    operator.addEventListener('click', function (){
        display.innerHTML = operator.innerHTML;
    })
}

//the equal sign
const equals = document.querySelector(".equals");

// the decimal button
const decimal = document.querySelector(".decimal");

//the clear button
const clear = document.querySelector(".clear")

// grabs display
const display = document.querySelector("#display-content");




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

// TODO: write query selectors and add event listeners to the calculator's buttons

