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
    const { displayValue, secondNumber } = calculator;
    //accounts for empty second number to add second number
    if (secondNumber === true) {
        calculator.displayValue = digit;
        calculator.secondNumber = false;
    } else {
        //overwrite 'displayValue' if the current value is '0', otherwise append new digit to number
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    
    

    //test calculator
    console.log(calculator);
}

//create a function to handle decimal point input
function inputDecimal(dot) {
    //if the displayValue property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        //append the decimal point
        calculator.displayValue += dot;
    }
}

//create a function that handles operators +, -, *, /, and =
function handleOperator(nextOperator) {
    //destructure the properties on the calculator object
    const { firstNumber, displayValue, operator } = calculator;
    //parsefloat converts the string contents of displayValue to a floating-point number
    const inputValue = parseFloat(displayValue);

    //verify that firstNumber is null and that the inputValue is not a NAN value
    if (firstNumber === null && !isNaN(inputValue)) {
        // update the firstNumber property
        calculator.firstNumber = inputValue;
    }

    calculator.secondNumber = true;
    calculator.operator = nextOperator;

    //test calculator
    console.log(calculator);
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
        //console.log('operator', target.value);//replaced with bellow
        handleOperator(target.value);
        updateDisplay();
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


