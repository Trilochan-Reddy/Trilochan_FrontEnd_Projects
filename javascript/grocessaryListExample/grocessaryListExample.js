let bgContainer=document.getElementById("bgContainer");

let mainHeading=document.getElementById("mainHeading");
mainHeading.textContent="Grocesary List";
mainHeading.classList.add("heading");

let listContainer=document.getElementById("listContainer");
listContainer.classList.add("list-container");

let grocesarylist=["Milk","Eggs","Banana","Oil"];

for (eachItem of grocesarylist){
    let listItem=document.createElement("li");
    listItem.textContent=eachItem;
    listContainer.appendChild(listItem);
}





let inputElement=document.getElementById("deliveryMode");


let labelElement=document.getElementById("labelElement");
labelElement.setAttribute("for","deliveryMode")
labelElement.classList.add("delivery-text");
labelElement.textContent="Proceed to pay";

let brElement=document.createElement("br");

let payButton=document.getElementById("payButton");
payButton.classList.add("btn","btn-primary");
 
bgContainer.appendChild(mainHeading);
bgContainer.appendChild(listContainer);

bgContainer.appendChild(inputElement);
bgContainer.appendChild(labelElement);
bgContainer.appendChild(labelElement);
bgContainer.appendChild(brElement);
bgContainer.appendChild(payButton);