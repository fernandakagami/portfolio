let keys = document.querySelectorAll(".key");

for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener("click", function() {

        buttonInnerHTML = keys[index].innerHTML;

        console.log(buttonInnerHTML);

        makeCalc(buttonInnerHTML);


    });
    
}

function makeCalc(key) {
    switch (key) {
        case 1:
                           
            break;
        case 2:
                
            break;
        case "three":
                
            break;
        case "four":
                
            break;
        case "five":

            break;
        case "six":
                
            break;
        case "seven":
            
        break;
        case "eight":
            
        break;
        case "nine":
            
        break;
        
        default: console.log("erro");
    }
}