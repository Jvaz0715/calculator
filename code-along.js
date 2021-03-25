// create an object to help keep track of firstnumber, secondnumber operator
//this calculator will keep track of things needed for expression

const calculator = {
    displayValue: '0',
    firstNumber: null,
    secondNumber: false,
    operator: null,
}

//create a function called input digit so display is updated with digits clicked

function inputDigit(digit) {
    const { displayValue } = calculator;
    //overwrite 'displayValue' if the current value is '0', otherwise append new digit to number
    calculator.displayValue = displayValue === '0' ? digit :displayValue + digit;
}

//create a function to handle decimal point input
function inputDecimal(dot) {
    //if the displayValue property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        //append the decimal point
        calculator.displayValue += dot;
    }
}

//create a function that will update the display

function updateDisplay() {
    //select the element with class of 'display'
    const display = document.querySelector('.display');
    //update the value of the element with the contents of 'displayValue'
    display.value = calculator.displayValue;
}

updateDisplay();

//add event listeners to all of the keys

const keys = document.querySelector('.buttons-container');

keys.addEventListener('click', (event) => {
    //access the clicked element
    const { target } = event;

    //check if the clicked element is a button
    //if not, exit from the function

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        //console.log('decimal', target.value);//replaced with below
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    //console.log('digit', target.value);// replaced with below to update digits as clicked

    inputDigit(target.value);
    updateDisplay();
});


