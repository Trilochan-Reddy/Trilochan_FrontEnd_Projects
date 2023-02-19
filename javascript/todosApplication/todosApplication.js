let todoItemsContainer=document.getElementById("todoItemsContainer");
let saveTodoButton=document.getElementById("saveTodoButton");

// localStorage.removeItem("todoList");





// maintain todo list which is array of objects each object contains what to do


saveTodoButton.onclick=function(){
    localStorage.setItem("todoList",JSON.stringify(todoList));
    
    // console.log(stringifiedTodoList);
    // console.log(typeof(stringifiedTodoList));
    // console.log("save button clicked");
}

function getTodoListfromLocalStorage(){
    let stringifiedTodoList=localStorage.getItem("todoList");
    let parsedTodoList=JSON.parse(stringifiedTodoList);
    if (parsedTodoList===null){
        return[];
    }
    else{
        return parsedTodoList;

    }
    console.log(parsedTodoList);
}

let todoList=getTodoListfromLocalStorage();
let todoCount=todoList.length;

function onDeleteTodo(todoId){
    let todoElement=document.getElementById(todoId);
    // console.log(todoElement);
    todoItemsContainer.removeChild(todoElement);

    let deletedTodoitemIndex=todoList.findIndex(function(eachTodo){
        let eachTodoId="todo"+eachTodo.uniqueNo;
        if (todoId===eachTodoId){
            return true
        }
        else{
            return false
        }
    })
    // console.log(deletedTodoitemIndex);
    todoList.splice(deletedTodoitemIndex,1);
    

}

function onTodoStatusChange(checkBoxId,labelId,todoId){
    // let checkBoxelement=document.getElementById(checkBoxId);
    let lableElement=document.getElementById(labelId);
    lableElement.classList.toggle("checked");
    let todoItemIndex=todoList.findIndex(function(eachTodo){
        let eachTodoId="todo"+eachTodo.uniqueNo;
        if (eachTodoId===todoId){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(todoItemIndex)
    let todoObject=todoList[todoItemIndex];
    if (todoObject.isChecked===true){
        todoObject.isChecked=false;
    }
    else{
        todoObject.isChecked=true;
    }
    // console.log(checkBoxelement.checked);

    // if (checkBoxelement.checked===true){
    //     lableElement.classList.add("checked");
    // }
    // else{
    //     lableElement.classList.remove("checked");
    // }
}

// creating a function for creating multiple todoItems and passing todoItem as parameter
function createAndAppendTodo(todo){
    let checkBoxId="checkBoxinput"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;


    // console.log(typeof(todo.uniqueNo));
    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);
    

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id=checkBoxId;
    inputElement.classList.add("checkbox-input");
    inputElement.checked=todo.isChecked;
    inputElement.onclick=function(){
        onTodoStatusChange(checkBoxId,labelId,todoId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement=document.createElement("label");
    labelElement.textContent=todo.text;
    labelElement.id=labelId;
    if (todo.isChecked===true){
        labelElement.classList.add("checked");
    }
    labelElement.classList.add("checkbox-label");
    labelElement.setAttribute("for",checkBoxId);
    labelContainer.appendChild(labelElement);

    let deletebuttonContainer=document.createElement("div");
    deletebuttonContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deletebuttonContainer);

    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteIcon.onclick=function(){
        onDeleteTodo(todoId);
    }
    deletebuttonContainer.appendChild(deleteIcon);
}

// calling createAndAppendTodo function with for loops so that multiple totos can be created easily
for (todo of todoList){
    createAndAppendTodo(todo);
}
// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);
function onAddTodo(){
    let userInputElement=document.getElementById("todoUserInput");
    
    let userInputValue=userInputElement.value;
    // console.log(userInputValue);
    if (userInputValue===""){
        alert("Enter Valid Input");
        return;
    }
    
    todoCount=todoCount+1

    let newTodo={
        text : userInputValue,
        uniqueNo : todoCount,
        isChecked:false
    }
    todoList.push(newTodo);
    console.log(todoList);
    createAndAppendTodo(newTodo);
    userInputElement.value="";
}

let addTodoButton=document.getElementById("addTodoButton");
addTodoButton.onclick=function(){
    onAddTodo();
    // console.log("Add todo clicked")
}