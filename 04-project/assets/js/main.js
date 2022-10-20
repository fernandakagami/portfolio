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

            // adicionar o evento no novo checkbox e no novo botão de deletar
        // procurar nos filhos do formulário pelo nome da classe, pega só o último, pq vai ser o que vc acabou de incluir

    event.target.elements['name'].value = '';
    } else {
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
    
    checkButton.addEventListener('click', () => {    
        if (!checked) {
            checkButton.classList.remove('fa-square');
            checkButton.classList.add('fa-square-check');
            
            itens[itens.length-1].checked = true;     
            localStorage.setItem("itens", JSON.stringify(itens)); 
        } else {
            checkButton.classList.add('fa-square');
            checkButton.classList.remove('fa-square-check');        
    
            itens[itens.length-1].checked = false;     
            localStorage.setItem("itens", JSON.stringify(itens)); 
        }
    });

    deleteButton.addEventListener('click', () => {                
        deleteButton.parentElement.remove();   

        itens.splice(itens.length-1, itens.length);
        localStorage.setItem("itens", JSON.stringify(itens));  
    });        

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

// delete button



