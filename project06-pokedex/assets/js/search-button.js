const coll = document.querySelector(".collapsible");
const content = document.querySelector(".content-search");
const closeButton = document.querySelector(".close");

coll.addEventListener("click", function() {    
    content.style.display = "flex";    
    coll.style.display = "none";
})

closeButton.addEventListener("click", function() {
    content.style.display = "none";
    coll.style.display = "inline-block";
})