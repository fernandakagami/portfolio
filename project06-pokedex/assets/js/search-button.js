const coll = document.querySelector(".collapsible");
const content = document.querySelector(".content-search");

coll.addEventListener("click", function() {    
    content.style.display = "flex";    
    coll.style.display = "none";
})

