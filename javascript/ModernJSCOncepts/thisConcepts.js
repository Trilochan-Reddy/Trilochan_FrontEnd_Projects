console.log("--------------om-----------");

// object literals
let car={
    color:"red",
    brand:"Audi",
    start:function(){
        console.log(this);
    }
}
console.log("-----object literals this--------");
car.start();

// regular functions
function start1(){
    console.log(this);
}
console.log("-----regular function this--------");
start1();


console.log("-----Arrow function this--------");
let car1={
    color:"blue",
    brand:"Audi",
    start:function(){
        setTimeout(function(){
            console.log("Testing");
        },1000)
    }
};
// car1.start();


// contect window -->window is an object -->it is refered as this is in window context
console.log(this);



// Arrow functions
let car2={
    color:"Green",
    brand:"Kia",
    start:()=>{
        // setTimeout(function(){console.log(this);},1000)
        console.log(this);
    }
};
console.log("--------Arrow functions-------========");
car2.start();



// Arrow functions with call back function


let bike={
    color:"green",
    brand:"BMW",
    start:function(){
        // console.log(this);
        setTimeout(()=>{
            console.log(this);
        },1000);
    }
}


console.log("------Arrow functions with call back function----------");
// bike.start();

// this in constructor functions

function Bikes(color,brand){
    this.color=color;
    this.brand=brand;

    this.start=function(){
        console.log(this);
    }

}

let bike1=new Bikes("red","Audi");
console.log("------this in constructor functions---------");
bike1.start();



// mutable and immutable

let x=5;
let y=x;
y=10;

console.log("----------immutable--------");
console.log(x);
console.log(y);



let a={
    value:10
};

let b=a;
let c={
    value:20
};
console.log("----------mutable--------");
console.log(b);
b.value=15;
console.log(b);
b=c;
console.log(b);


// variable declaration using let
console.log("--variable declaration using let------");
let m;
m=20;
console.log(m);
m=30;
console.log(m);


// variable declaration using const
console.log("-----------variable declaration using const-------")
const sama=7;
console.log(sama);
// sama=10;
console.log(sama);


// const with mutable object properties
const clg={
    color:"green",
    brand:"Audi"
};

clg.color="red";
console.log("----const with mutable object properties------");
console.log(clg.color);
// clg={};
// console.log(clg.color);