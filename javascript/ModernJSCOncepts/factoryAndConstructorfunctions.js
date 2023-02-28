console.log("----om-----");

// creating object using object literals

let carDetails1={
    color:"green",
    brand:"BMW",
    start:function(){
        console.log("started");
    }
}

let carDetails2={
    color:"red",
    brand:"Audi",
    start:function(){
        console.log("started");
    }
}

let carDetails3={
    color:"blue",
    brand:"Benz",
    start:function(){
        console.log("started");
    }
}
console.log("---------creating object using object literals--------");

console.log(carDetails1);
console.log(carDetails2);
console.log(carDetails3);



// factory function  returns a object


function createCar(color,brand){
    return {
        color, //color:color,
        brand, //brand:brand,
        start(){
            onsole.log("started");
        }
        // start:function(){
        //     console.log("started");
        // }
    }
}

let car1=createCar("red","BMW");
let car2=createCar("blue","Audi");
let car3=createCar("green","Kia");

console.log("-------creating object using factory function");
console.log(car1);
console.log(car2);
console.log(car3);


// constructor functions in JS
function cars(color,brand){
    this.color=color,
    this.brand=brand,
    this.start=function(){
        console.log("started");
    }
}

let cars1= new cars("red","BMW");
let cars2= new cars("green","Audi");
let cars3= new cars("yellow","Kia");

console.log("------creating objects using constructor function------");
console.log(cars1); //instance properties =cars1.color, cars1.brand 
console.log(cars2); // instance methods cars1.start()
console.log(cars3.start());

console.log("-----returne function name----");
console.log(cars.name); // returns function name
console.log("-----returne function length----");
console.log(cars.length); // returns how many parameters is passed
console.log("-----returne typeof function ----");
console.log(typeof(cars)); // returns function name



console.log("-----------constructor property------");
console.log(cars1.constructor);





