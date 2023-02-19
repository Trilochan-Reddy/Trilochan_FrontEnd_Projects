let person={
    name:"Trilochan",
    age:26,
    designation: "Web Developer"
};


let car={
    name:"Audi",
    model:"b5",
    color:"red"
}
// js object-->stringigy()-->JSON String
let stringifiedProfile=JSON.stringify(person);
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

// // JSON String-->*parse()-->js object
let parsedProfile=JSON.parse(stringifiedProfile);
console.log(parsedProfile);
console.log(typeof(parsedProfile));

localStorage.setItem("carDetails",JSON.stringify(car));
let stringifiedCarDetails=localStorage.getItem("carDetails");
console.log(stringifiedCarDetails);
let parsedCarDetails=JSON.parse(stringifiedCarDetails);
console.log(parsedCarDetails);
