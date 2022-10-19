const keys = document.querySelectorAll(".key");

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const displayResult = document.querySelector(".display-result");
let number1 = 0;
let number2 = 0;
let operator = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        number1 = number2;
        number2 = button.innerHTML;
        displayResult.innerHTML = number2;     
    });    
});

operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {        
        if (number2 === 0) {
            displayResult.innerHTML = 'error';        
        } else {
            operator = operation.innerHTML;    
            displayResult.innerHTML = operator;    
        }        
    });
});

equalsButton.addEventListener('click', () => {
    switch (operator) {        
        case '+':
            displayResult.innerHTML = parseInt(number1) + parseInt(number2);  
            number1 = 0;
            number2 = 0;
            break
        case '-':
            displayResult.innerHTML = parseInt(number1) - parseInt(number2);
            number1 = 0;
            number2 = 0;
            break
        case 'x':
            displayResult.innerHTML = parseInt(number1) * parseInt(number2);
            number1 = 0;
            number2 = 0;
            break
        case '/':
            displayResult.innerHTML = number1 / number2;
            number1 = 0;
            number2 = 0;
            break
        default: result = 'error';            
            return
      }
});

deleteButton.addEventListener('click', () => {        
    displayResult.innerHTML = 0; 
});