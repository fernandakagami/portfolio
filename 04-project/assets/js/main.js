const form = document.getElementById('newItem');
const list = document.getElementById("list"); 
const itens = JSON.parse(localStorage.getItem("itens")) || [];

console.log(itens);

itens.forEach(element => {
    console.log(element.checked)
    if (element.checked === true) {
        list.innerHTML += elementCheckedCreate(element.name);   
    } else {
        list.innerHTML += elementCreate(element.name);   
    }    
});

form.addEventListener('submit', (event) => {
    event.preventDefault();    

    if (event.target.elements['name'].value != '') {
        list.innerHTML += elementCreate(event.target.elements['name'].value);

        storage(event.target.elements['name'].value);

        event.target.elements['name'].value = '';
    } else {
        event.target.elements['name'].value = '';
    }
});

function elementCreate(name) {
    return `<li class="task">
                <i class="fa-regular fa-square"></i>
                <p class="task-description">${name}</p>
        </li>`
}

function elementCheckedCreate(name) {
    return `<li class="task">
                <i class="fa-regular fa-square-check"></i>
                <p class="task-description">${name}</p>
        </li>`
}

function storage(name, checked = false) {
    const currentItem = {
        "name": name,
        "checked": checked
    }

    itens.push(currentItem);
    localStorage.setItem("itens", JSON.stringify(itens));
}

// check box

const checks = document.querySelectorAll(".task");

for (let index = 0; index < checks.length; index++) {
    checks[index].addEventListener('click', () => {
        let check = checks[index].querySelector(".fa-square");
        check.classList.remove('fa-square')
        check.classList.add('fa-square-check');

        itens[index].checked = true;             
    });    
    localStorage.setItem("itens", JSON.stringify(itens));
}


