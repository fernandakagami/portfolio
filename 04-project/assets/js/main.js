const form = document.getElementById('newItem');
const list = document.getElementById("list");    

form.addEventListener('submit', (event) => {
    event.preventDefault();

    list.innerHTML += elementCreate(event.target.elements['name'].value);
    
    console.log(event.target.elements['name'].value);

    localStorage.setItem("name", event.target.elements['name'].value);
    event.target.elements['name'].value = '';

});

function elementCreate(name) {
    return `<li class="task">
            <i class="fa-regular fa-square"></i>
            <p>${name}</p>
        </li>`
}