// create an object to help keep track of firstnumber, secondnumber operator
//this calculator will keep track of things needed for expression

const calculator = {
    displayValue: '0',
    firstNumber: null,
    secondNumber: false,
    operator: null,
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
        console.log('decimal', target.value);
        return;
    }

    if(target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});


