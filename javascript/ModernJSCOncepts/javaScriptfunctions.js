// function declaration
function add(a,b){
    return a+b;
}
console.log("-------function declaration--------");
console.log(add(2,3));

// function Expression
let add1=function(a,b){
    return a+b;
}

console.log("-------function Expressions--------");
console.log(add1(2,3));

// Arrow Functions

let add2=(a,b)=>{
    return a+b;
}
console.log("-------Arraow function--------");
console.log(add2(2,3));

let sum=(a,b)=>a+b;
console.log("------Arrow functions with simple expressions-----");
console.log(sum(2,3));

let isEqual=(a,b)=>a===b;
console.log(isEqual(2,2));
console.log(isEqual(2,4));

console.log("------Arrow functions with only one parameter-----");

let greet=name=>`hi ${name}`;
console.log(greet("Trilochan"));

let square=n=>n*n;
console.log(square(4));

console.log("------Arrow functions with no parameters-----");
let sayHi=()=>"hi!";
console.log(sayHi());


console.log("------Arrow functions with simple objects-----");

let createUser=(name)=>({
    firstName:name
});
console.log(createUser("sama"));