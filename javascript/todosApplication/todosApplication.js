let todoItemsContainer=document.getElementById("todoItemsContainer");
let todoElement=document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainer.appendChild(todoElement);
console.log(todoItemsContainer);

let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id="checkBoxinput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer=document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
todoElement.appendChild(labelContainer);

let labelElement=document.createElement("label");
labelElement.textContent="HTML";
labelElement.classList.add("checkbox-label");
labelElement.setAttribute("for","checkBoxinput");
labelContainer.appendChild(labelElement);

let deletebuttonContainer=document.createElement("div");
deletebuttonContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deletebuttonContainer);

let deleteButton=document.createElement("i");
deleteButton.classList.add("far","fa-trash-alt","delete-icon");
deletebuttonContainer.appendChild(deleteButton);