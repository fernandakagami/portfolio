const keys = document.querySelectorAll(".key");
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const displayResult = document.querySelector(".display-result");
const changeValue = document.querySelector('[data-change]');
const ce = document.querySelector('[data-ce]');
let number1 = 0;
let number2 = 0;
let operator = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === 0) {
            if (number1 === 0) {
                number1 = button.innerHTML;
                displayResult.innerHTML = number1;
            } else {
                if (number1.length <= '10') {
                    number1 += button.innerHTML;
                    displayResult.innerHTML = number1;
                } else {
                    number1 = 'error';
                    displayResult.innerHTML = number1;
                    number1 = 0;
                }                
            }            
        } else {
            if (number2 === 0) {
                number2 = button.innerHTML;
                displayResult.innerHTML = number2;
            } else {
                if (number2.length <= '10') {
                    number2 += button.innerHTML;
                    displayResult.innerHTML = number2;
                } else {
                    number2 = 'error';
                    displayResult.innerHTML = number2;
                    number2 = 0;
                    number1 = 0;
                    operator = 0;
                }     
            }                 
        }        
    })
});

operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        if (number1 === 0 && operator === 0) {
            displayResult.innerHTML = 'error';
        } else {
            operator = operation.innerHTML;    
            displayResult.innerHTML = operator;
        }        
    });
});

equalsButton.addEventListener('click', () => {
    if (operator === '+') {
        number1 = parseFloat(number1) + parseFloat(number2);
        displayResult.innerHTML = number1;
        number2 = 0;
        operator = 0;
    } else if (operator === '-') {
        number1 = parseFloat(number1) - parseFloat(number2);
        displayResult.innerHTML = number1;
        number2 = 0;
        operator = 0;
    } else if (operator === 'x') {
        number1 = parseFloat(number1) * parseFloat(number2);
        displayResult.innerHTML = number1;
        number2 = 0;
        operator = 0;
    } else if (operator === '/') {
        if (number2 == 0) {
            displayResult.innerHTML = 'error';    
        } else {
            number1 = parseFloat(number1) / parseFloat(number2);
            displayResult.innerHTML = number1;
            number2 = 0;
            operator = 0;
        }
    } else if (operator === 'x^y') {
        number1 = parseFloat(number1) ** parseFloat(number2);
        displayResult.innerHTML = number1;
        number2 = 0;
        operator = 0;
    } else {        
        displayResult.innerHTML = 'error';
        number1 = 0;
        number2 = 0;        
    }
});

deleteButton.addEventListener('click', () => {    
    number1 = 0;
    number2 = 0;
    operator = 0;          
    displayResult.innerHTML = 0;
});

ce.addEventListener('click', () => {
    if (displayResult.innerHTML === number1) {
        number1 = 0;
        displayResult.innerHTML = 0;
    } else if (displayResult.innerHTML === number2) {
        number2 = 0;
        displayResult.innerHTML = 0;
    }
});

changeValue.addEventListener('click', () => {    
    if (operator === 0) {
        if (number1 === 0) {
            number1 = '-';
            displayResult.innerHTML = number1;
        } else if (number1.substring(0, 1) === '-') {            
            number1 = number1.slice(1);
            number1 = '+' + number1
            displayResult.innerHTML = number1;
        } else if (number1.substring(0, 1) === '+') {    
            console.log(number1.substring(0, 1) === '+');
            number1 = number1.slice(1);
            number1 = '-' + number1
            displayResult.innerHTML = number1;
        } else {
            number1 = '-' + number1;
            displayResult.innerHTML = number1;
        }       
    } else {
        if (number2 === 0) {
            number2 = '-';
            displayResult.innerHTML = number2;
        } else if (number2.substring(0, 1) === '-') {            
            number2 = number2.slice(1);
            number2 = '+' + number2
            displayResult.innerHTML = number2;
        } else if (number2.substring(0, 1) === '+') {
            number2 = number2.slice(1);
            number2 = '-' + number2
            displayResult.innerHTML = number2;
        } else {
            number2 = '-' + number2;
            displayResult.innerHTML = number2;
        }                
    }
})

//reduzir repetição