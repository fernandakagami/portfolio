const form = document.getElementById('newItem');
const list = document.getElementById("list"); 
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => { 
    createTask(element.name, element.checked);       
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = event.target.elements['name'].value;

    if (taskName != '') {
        createTask(taskName, false);

        storage(taskName, false);

        console.log(event);

        const listOfLi = document.querySelector(".list");

        console.log(listOfLi.lastChild);
    
        listOfLi.addEventListener('click', () => {    
                if () {
                    lastItemChecked[index].classList.remove('fa-square');
                    lastItemChecked[index].classList.add('fa-square-check');        
            
                    itens[index].checked = true;     
                    localStorage.setItem("itens", JSON.stringify(itens)); 
                } else {
                    lastItemChecked[index].classList.add('fa-square');
                    lastItemChecked[index].classList.remove('fa-square-check');        
            
                    itens[index].checked = false;     
                    localStorage.setItem("itens", JSON.stringify(itens)); 
                }
                            
            });    
        }
            // adicionar o evento no novo checkbox e no novo botão de deletar
        // procurar nos filhos do formulário pelo nome da classe, pega só o último, pq vai ser o que vc acabou de incluir

        event.target.elements['name'].value = '';
    //} else {
        event.target.elements['name'].value = '';
    }
});

function createTask(name, checked) {
    const li = document.createElement("li");
    const checkButton = document.createElement("i");
    const taskDescription = document.createElement("p");
    const taskName = document.createTextNode(name);
    const deleteButton = document.createElement("i");

    li.classList.add("task");
    checkButton.classList.add("check-button", "fa-regular");
    if (checked) {
        checkButton.classList.add("fa-square-check");
    } else {
        checkButton.classList.add("fa-square");
    }
    taskDescription.classList.add("task-description");    
    deleteButton.classList.add("delete-button", "fa-sharp", "fa-solid", "fa-square-xmark");

    li.appendChild(checkButton);
    li.appendChild(taskDescription);
    taskDescription.appendChild(taskName);
    li.appendChild(deleteButton);
    list.appendChild(li);        
}

function storage(name, checked) {
    const currentItem = {
        "name": name,
        "checked": checked
    }

    itens.push(currentItem);
    localStorage.setItem("itens", JSON.stringify(itens));
}

// check box

let checks = document.querySelectorAll(".check-button");

for (let index = 0; index < checks.length; index++) {
    checks[index].addEventListener('click', () => {    
        if (!itens[index].checked) {
            checks[index].classList.remove('fa-square');
            checks[index].classList.add('fa-square-check');        
    
            itens[index].checked = true;     
            localStorage.setItem("itens", JSON.stringify(itens)); 
        } else {
            checks[index].classList.add('fa-square');
            checks[index].classList.remove('fa-square-check');        
    
            itens[index].checked = false;     
            localStorage.setItem("itens", JSON.stringify(itens)); 
        }
                    
    });        
};

// delete button

let deleteButton = document.querySelectorAll(".delete-button");

for (let index = 0; index < deleteButton.length; index++) {
    deleteButton[index].addEventListener('click', () => {                
        deleteButton[index].parentElement.remove();   

        itens.splice(index, (++index));
        localStorage.setItem("itens", JSON.stringify(itens));  
    });        
};


