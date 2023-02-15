let counterElement=document.getElementById("counterElement");
let counterValueElement=document.getElementById("counterValue");
console.log(typeof(counterValueElement.textContent));
let countDecreaseButton=document.getElementById("countDecrease");
let countResetButton=document.getElementById("countReset");
let countIncreaseButton=document.getElementById("countIncrease");



function decreaseValue(){
    
    // console.log("D B C");
    let previousCountValue=parseInt(counterValueElement.textContent);
    let updatedCountValue=previousCountValue-1;
    // console.log((count));
    // console.log(typeof(count));
    counterValueElement.textContent=updatedCountValue;

    if (updatedCountValue>0){
        counterValueElement.style.color="green";
    }
    else if (updatedCountValue<0) {
        counterValueElement.style.color="red";
    }
    else{
        counterValueElement.style.color="black";
    }
}

function resetValue(){
    // console.log("R B C");
    let updatedCountValue=0;
    // console.log((count));
    // console.log(typeof(count));
    counterValueElement.textContent=updatedCountValue;
    counterValueElement.style.color="black";
}

function increaseValue(){
    // console.log("I B C");
    let previousCountValue=parseInt(counterValueElement.textContent);
    let updatedCountValue=previousCountValue+1;
    counterValueElement.textContent=updatedCountValue;

    if (updatedCountValue>0){
        counterValueElement.style.color="green";
    }
    else if (updatedCountValue<0) {
        counterValueElement.style.color="red";
    }
    else{
        counterValueElement.style.color="black";
    }
   
    
}