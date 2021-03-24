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

        // checks if button pressed is number
        if (!action) {
            if (displayNumber === '0') {
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
            console.log("you pressed an operator button")
        }

        if (action === "decimal") {
            console.log('you pressed the decimal button')
        }

        if (action === "clear") {
            console.log('you pressed the clear button')
        }

        if (action === "calculate") {
            console.log('you pressed the equal button')
        }
    }
})