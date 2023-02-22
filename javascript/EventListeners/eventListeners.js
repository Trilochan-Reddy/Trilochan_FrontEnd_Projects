let inLineBtnEl=document.getElementById("inLine");



let addEventListenerBtnEl=document.getElementById("addEventListener");

addEventListenerBtnEl.addEventListener('click', function(event) {
    console.log("addEventListener");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
})

inLineBtnEl.onclick=function(){
    console.log("onEvent Listener");

}
function greeting(){
    console.log("inline event listener");
}



// keyboard Events
// keydown
let inputEl=document.createElement("input");

function pressDown(event){
    console.log("key pressed");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.key);
    
}

inputEl.addEventListener('keydown',pressDown);
document.body.appendChild(inputEl);

//keyup
let inputElKeyUp=document.createElement("input");
inputElKeyUp.placeholder="key release";

function keyRelease(event){
    console.log("key Released");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.key);

}
inputElKeyUp.addEventListener('keyup',keyRelease)

document.body.appendChild(inputElKeyUp);



