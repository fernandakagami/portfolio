const form = document.getElementById('newItem');
const inputName = document.getElementById('name');
const list = document.getElementById("list"); 
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => { 
    createTask(element.name, element.checked);       
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = inputName.value;

    if (taskName != '') {
        createTask(taskName, false);
        saveTasksToStorage();
        inputName.value = '';
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
        if (checkButton.classList.contains('fa-square')) {
            checkButton.classList.remove('fa-square');
            checkButton.classList.add('fa-square-check');
        } else {
            checkButton.classList.add('fa-square');
            checkButton.classList.remove('fa-square-check');
        }
        saveTasksToStorage();
    });

    deleteButton.addEventListener('click', () => {                
        li.remove();
        saveTasksToStorage();
    });        
}

function saveTasksToStorage() {
    let tasks = [];
    document.querySelectorAll('.task').forEach( taskHtml => {
        tasks.push({
            "name": taskHtml.getElementsByClassName("task-description")[0].innerHTML,
            "checked": taskHtml.getElementsByClassName("fa-square-check").length === 1 ? true : false
        })
    });
    localStorage.setItem("itens", JSON.stringify(tasks));
}

