// localStorage setItem Syntax
// localStorage.setItem("key","value");


localStorage.setItem("Name","Trilocahn");
localStorage.setItem("Gender","Male");
localStorage.setItem("City","Hyderabad");
localStorage.setItem("age","26");

// getItem()
// localStorage getItem Syntax
// localStorage.getItem("key");

let Name=localStorage.getItem("Name");
let Gender=localStorage.getItem("Gender");
let City=localStorage.getItem("City");
let Occupation=localStorage.getItem("occupation");
let Age=localStorage.getItem("age");

console.log(Name);
console.log(Gender);
console.log(City);
console.log(Occupation);
console.log(Age);
console.log(typeof(Age));

let bgContainer=document.getElementById("bgContainer");
bgContainer.style.color="red";

let textAreaElement=document.createElement("textarea");
textAreaElement.rows="8";
textAreaElement.cols="55";
textAreaElement.id="textAreaElement";
bgContainer.appendChild(textAreaElement);

let brElement=document.createElement("br");
bgContainer.appendChild(brElement);

let buttonElement=document.createElement("button");
buttonElement.classList.add("btn","btn-primary");
buttonElement.textContent="Save";
buttonElement.onclick=function(){
    let textAreaElementValue=textAreaElement.value;
    localStorage.setItem("textAreaElementValue",textAreaElementValue);

    

    // console.log(message);
    // console.log(textAreaElementValue);
    
}

let message=localStorage.getItem("textAreaElementValue");
if (message===null){
    textAreaElement.value="";
}
else{
    textAreaElement.value=message;
}

bgContainer.appendChild(buttonElement);
