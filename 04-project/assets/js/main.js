const form = document.getElementById('newItem');
const list = document.getElementById("list"); 
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {    
    if (element.checked) {
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
                <i class="check-button fa-regular fa-square"></i>
                <p class="task-description">${name}</p>
                <i class="delete-button fa-sharp fa-solid fa-square-xmark"></i>
        </li>`
}

function elementCheckedCreate(name) {
    return `<li class="task">
                <i class="check-button fa-regular fa-square-check"></i>
                <p class="task-description">${name}</p>
                <i class="delete-button fa-sharp fa-solid fa-square-xmark"></i>
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

const checks = document.querySelectorAll(".check-button");

for (let index = 0; index < checks.length; index++) {
    checks[index].addEventListener('click', () => {                
        checks[index].classList.remove('fa-square');
        checks[index].classList.add('fa-square-check');        

        itens[index].checked = true;     
        localStorage.setItem("itens", JSON.stringify(itens));             
    });        
};


// delete button

const deleteButton = document.querySelectorAll(".delete-button");

for (let index = 0; index < deleteButton.length; index++) {
    deleteButton[index].addEventListener('click', () => {                
        deleteButton[index].parentElement.remove();   

        itens.splice(index, (++index));
        localStorage.setItem("itens", JSON.stringify(itens));  
    });        
};


