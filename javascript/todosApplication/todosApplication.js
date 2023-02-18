let todoItemsContainer=document.getElementById("todoItemsContainer");


// maintain todo list which is array of objects each object contains what to do
let todoList=[
    {
        text:"Learn HTML"
    },
    {
        text:"Learn CSS"
    },
    {
        text:"Learn Java Script"
    }
]

// creating a function for creating multiple todoItems and passing todoItem as parameter
function createAndAppendTodo(todo){
    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id="checkBoxinput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement=document.createElement("label");
    labelElement.textContent=todo.text;
    labelElement.classList.add("checkbox-label");
    labelElement.setAttribute("for","checkBoxinput");
    labelContainer.appendChild(labelElement);

    let deletebuttonContainer=document.createElement("div");
    deletebuttonContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deletebuttonContainer);

    let deleteButton=document.createElement("i");
    deleteButton.classList.add("far","fa-trash-alt","delete-icon");
    deletebuttonContainer.appendChild(deleteButton);
}

// calling createAndAppendTodo function with for loops so that multiple totos can be created easily
for (todo of todoList){
    createAndAppendTodo(todo);
}
// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);