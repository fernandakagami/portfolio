const form = document.getElementById('newItem');
const list = document.getElementById("list"); 
const itens = JSON.parse(localStorage.getItem("itens")) || [];

console.log(itens);

itens.forEach(element => {
    list.innerHTML += elementCreate(element.name);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    list.innerHTML += elementCreate(event.target.elements['name'].value);

    storage(event.target.elements['name'].value);

    //itens.push(event.target.elements['name'].value);
    //localStorage.setItem("itens", itens);

    event.target.elements['name'].value = '';
});

function elementCreate(name) {
    return `<li class="task">
            <i class="fa-regular fa-square"></i>
            <p>${name}</p>
        </li>`
}

function storage(name) {
    const currentItem = {
        "name": name
    }

    itens.push(currentItem);
    localStorage.setItem("itens", JSON.stringify(itens));
}