const keys = document.querySelectorAll(".key");

for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener("click", () => {

        buttonInnerHTML = keys[index].innerHTML;

        console.log(buttonInnerHTML);

        // show the input in screen
        const result = document.querySelector(".result");
        result.innerHTML = buttonInnerHTML;

    });    
}

function calc (num1, operator, num2) {

}

