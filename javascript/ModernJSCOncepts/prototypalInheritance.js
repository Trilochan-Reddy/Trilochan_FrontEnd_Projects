console.log("-----------------om--------------");

// older way of array 
let myA = new Array(1,2,3);
console.log("------older way of array ---------");
console.log(myA);

// newer way of array 
let myAr=[1,2,3];

console.log("------newer way of array ---------")
console.log(myAr);

// Array properties-->prototype
console.log("------Array properties-->prototype ---------")

console.log(Array.prototype);

// Accesssing prototype of instance
console.log("--------// Accesssing prototype of instance--------");
console.log(Object.getPrototypeOf(myA));


// built in constructor function

let myCar=new Function("color,brand",
`                                   this.color=color;
                                    this.brand=brand;
                                    this.start=function(){
                                        console.log("Started");
                                        }
`
);
console.log("---------// built in constructor function---------");
console.log(Function.prototype);
// console.log(myCar);
console.log(Object.getPrototypeOf(myCar));


// constructor function

function Bikessss(color,brand){
    this.color=color,
    this.brand=brand,
    this.start=function(){
        console.log("started");
    }
}
let biks=new Bikessss("red","BMW");
console.log(biks);
console.log("--------function prototype property-----");
console.log(Bikessss.prototype);
console.log(Object.getPrototypeOf(biks));

// adding properties and methods to prototype


function Cricketer(fName,lName){
    this.fName=fName;
    this.lName=lName;

}
// adding property to prototype

Cricketer.prototype.displayFullName=function(){
    return this.fName+" "+this.lName;
}

let crickName1=new Cricketer("virat","kohli");
let crickName2=new Cricketer("sachin","Tendulkar");
console.log(crickName1.displayFullName());
console.log(crickName2);
console.log("Cricketer function prototype");
console.log(Cricketer.prototype);
console.log(Object.getPrototypeOf(crickName1)===Object.getPrototypeOf(crickName2));
console.log(Object.getPrototypeOf(crickName1));

// accessing own properties
console.log("accessing own properties");
console.log(Object.getOwnPropertyNames(crickName1));
