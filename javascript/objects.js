let person={
    name:"Trilochan",
    age:26,
    arr:[1,2,3],
    "1":"value1",
    "my choice":"Value2"
};



console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["1"]);
console.log(person["my choice"]);
console.log(person.gender);
console.log(person["gender"]);

let a="name";
console.log(person[a]);
console.log(person.a);
console.log("--------------------");
// object Destructuring
let {name,age,gender,arr}=person;
console.log("objetc destructuring");
console.log(name);
console.log(age);
console.log(gender);
console.log(arr);


console.log("--------------------");



// modifying objects
person.name="Rahul";
person["age"]=30;
console.log(person.name);
console.log(person["age"]);


console.log("--------------------");

// adding object properties
person.gender="Male";
person["city"]="Hyderabad";
console.log(person);

console.log("--------------------");


// giving function as value to key
person.run=function(){
    console.log("Start Running")
}
person.run();
console.log("--------------------");
// array as value
person.hobbies=["Dancing","Singing","Eating"];
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person["hobbies"][0]);



console.log("--------------------");
// object as value

person.car={
    name:"Audi",
    model:"A6",
    color:"White"
}

console.log(person.car);
console.log(person.car.name);
console.log(person.car["name"]);
console.log("--------------------");