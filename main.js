const calculator = document.querySelector("#calculator-container");

const buttons = calculator.querySelector(".buttons-container");

const display = document.querySelector(".display");

buttons.addEventListener('click', event => {
    if (event.target.matches('button')) {
        //do something
        //console.log('something was clicked')

        const button = event.target;
        const action = button.dataset.action;
        const buttonContent = button.textContent;
        const displayNumber = display.textContent;
        const previousButtonType = calculator.dataset.previousButtonType;
    

        // checks if button pressed is number
        if (!action) {
            //adds number and appends following numbers
            if (displayNumber === '0' || previousButtonType === 'operator') {
                display.textContent = buttonContent;
            } else {
                display.textContent = displayNumber + buttonContent;
            }
        }
        //checks if button is an operator
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            // adds a class to operator functions
            button.classList.add('is-depressed');
            calculator.dataset.previousButtonType = "operator"
        }

        if (action === "decimal") {
            display.textContent = displayNumber + '.'
        }

        if (action === "clear") {
            console.log('you pressed the clear button')
        }

        if (action === "calculate") {
            console.log('you pressed the equal button')
        }
         // remove .is-depressed class from all buttons
        Array.from(button.parentNode.children)
            .forEach(b => b.classList.remove('is-depressed'));
    }
})