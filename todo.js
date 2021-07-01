// select element and assign to variables

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let incompleteLists = document.querySelector('#items');
let completeLists = document.querySelector('.complete-list ul');

//console.log(completeLists);

//functions
let createTask = function(task) {
    console.log(1);
    let lists = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task
    checkbox.type = 'checkbox';

    lists.appendChild(checkbox);
    lists.appendChild(label);

    //incompleteLists.appendChild(lists);
    

    return lists;
}

let addTask = function(event) {
    console.log(2);
    event.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteLists.appendChild(listItem);
    newTask.value = '';

    // bind the new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function() {
    console.log(3);
    let listItem = this.parentNode;
    console.log(listItem);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeLists.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    console.log(4);
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkboxClick) {
    console.log(5);
    console.log(taskItem);
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    console.log(checkBox);
    checkBox.onclick = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    console.log(6);
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

form.addEventListener('submit', addTask);