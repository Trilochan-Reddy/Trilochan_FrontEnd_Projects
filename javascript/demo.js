let heading=document.getElementById("headingElement");
heading.textContent="4.0 Technologies";
heading.style.color="blue";
console.log(heading.textContent);
let inputName=document.getElementById("inputNameElement");
console.log(inputName.value);

function a(){
    console.log("hello trilochan u clicked change heading button");
    heading.textContent="Text Changed";
    heading.style.color="red";
}
function signInText(){
    let inputValue=inputName.value;
    let signInTextValue=document.getElementById("signinText");
    signInTextValue.textContent="Hi "+inputValue+" Verifying your account.";
}