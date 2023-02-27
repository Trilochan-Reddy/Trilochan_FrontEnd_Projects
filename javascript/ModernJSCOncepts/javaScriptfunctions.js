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