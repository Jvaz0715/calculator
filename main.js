const calculator = document.querySelector("#calculator-container");

const buttons = calculator.querySelector(".buttons-container");

buttons.addEventListener('click', event => {
    if (event.target.matches('button')) {
        //do something
        //console.log('something was clicked')

        const button = event.target;
        const action = button.dataset.action;
        // checks if button pressed is number
        if (!action) {
            console.log('You pressed a number');
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