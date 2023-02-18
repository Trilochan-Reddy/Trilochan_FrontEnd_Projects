let heading=document.getElementById("headingElement");
heading.textContent="4.0 Technologies";
heading.style.color="blue";
console.log(heading.textContent);
let inputName=document.getElementById("inputNameElement");
console.log(inputName.value);

let demoContainerElement=document.getElementById("rootContainer");
let h1Element=document.createElement("h1");
h1Element.textContent="Element Created in JS";
demoContainerElement.appendChild(h1Element);


let buttonElement=document.createElement("button");
buttonElement.textContent="Change Heading";
buttonElement.onclick=function(){
    h1Element.textContent="Heading modified when change heading button clicked";
    h1Element.classList.add("heading");
}
let removeStyles=document.createElement("button");
removeStyles.textContent="Remove Styles";
removeStyles.onclick=function(){
    h1Element.classList.remove("heading");
}
demoContainerElement.appendChild(buttonElement);
demoContainerElement.appendChild(removeStyles);

let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id="myCheckBox1";
let lableElement=document.createElement("label");
lableElement.textContent="Graduated";
// lableElement.htmlFor="myCheckBox1";
lableElement.setAttribute("for","myCheckBox1");
demoContainerElement.appendChild(inputElement);
demoContainerElement.appendChild(lableElement);


function a(){
    console.log("hello trilochan u clicked change heading button");
    heading.textContent="Text Changed";
    heading.style.color="red";
}
function signInText(){
    let inputValue=inputName.value;
    let signInTextValue=document.getElementById("signinText");
    signInTextValue.textContent="Hi "+inputValue+", Verifying your account...";
}

// function Expression-->

// let showMessage=function(){
//     console.log("Hello");
// }

// showMessage()


let abc=[1,2,3,4,5];
// for of loop
for (let eachItem of abc){
    console.log(eachItem);
}