let counterElement=document.getElementById("counterElement");
let counterValueElement=document.getElementById("counterValue");
console.log(typeof(counterValueElement.textContent));
let countDecreaseButton=document.getElementById("countDecrease");
let countResetButton=document.getElementById("countReset");
let countIncreaseButton=document.getElementById("countIncrease");
let count=parseInt(counterValueElement.textContent);


function decreaseValue(){
    
    // console.log("D B C");
    count=count-1;
    // console.log((count));
    // console.log(typeof(count));
    counterValueElement.textContent=count;
}

function resetValue(){
    // console.log("R B C");
    count=0;
    // console.log((count));
    // console.log(typeof(count));
    counterValueElement.textContent=count;
}

function increaseValue(){
    // console.log("I B C");
    count=count+1;
    // console.log((count));
    // console.log(typeof(count));
    counterValueElement.textContent=count;
}