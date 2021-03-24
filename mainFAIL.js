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
            calculator.dataset.previousButtonType = "operator";
            calculator.dataset.firstValue = displayNumber;
            calculator.dataset.operator = action;
        }

        if (action === "decimal") {
            display.textContent = displayNumber + '.'
        }

        if (action === "clear") {
            console.log('you pressed the clear button')
        }

        if (action === "calculate") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNumber;

            display.textContent = calculate(firstValue, operator, secondValue);

            const calculate = (n1, operator, n2) {
                let result = '';

                if (operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2);
                }
                return result;
            }
            
        }
         // remove .is-depressed class from all buttons
        Array.from(button.parentNode.children)
            .forEach(b => b.classList.remove('is-depressed'));
    }
})