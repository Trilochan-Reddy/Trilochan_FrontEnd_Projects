console.log("Passing Function as argument");
function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Morning");

}



displayGreeting(function(){
    console.log("Trilochan");
});

console.log("-----------------");
console.log("function defination ---created displayTrilochan() function");

// function defination ---created displayTrilochan() function
function displayTrilochan(){
    console.log("Trilochan")
}

displayGreeting(displayTrilochan);  //providing function name as argument to a function


console.log("-----------------");
console.log("function expression ---created displayTrilochanFunctionExpression() function");
// function expression ---created displayTrilochanFunctionExpression() function
let displayTrilochanFunctionExpression= function(){
    console.log("Trilochan");
}

displayGreeting(displayTrilochanFunctionExpression);  //providing function name as argument to a function



// setInterval(function,delay)-->syntax
// let counter=0;
// setInterval(function(){
//     console.log(counter);
//     counter=counter+1;
// },2000);


let setIntervalButton=document.getElementById("setIntervalButton");
let clearIntervalButton=document.getElementById("clearIntervalButton");
let uniqueId=null;

setIntervalButton.onclick=function(){
    let counterValue=0;
    uniqueId=setInterval(function(){
        console.log(counterValue);
        counterValue=counterValue+1;
    },2000);
    console.log(uniqueId);
};
clearIntervalButton.onclick=function(){
    clearInterval(uniqueId);
    console.log("clearInterval is called");
};