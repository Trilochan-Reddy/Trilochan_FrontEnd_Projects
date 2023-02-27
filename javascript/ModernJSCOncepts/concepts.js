// spread operator ()...)
let c=["a",2,"c"];
console.log("spread operator elements");
console.log(...c);
let arr1=[1,2,3,4];
let arr2=[...arr1,5,6,7,8];
console.log(arr2);

// creating a copy
let a=[1,2];
let b=[...a];
console.log("creating a copy");
console.log(b);


// concatenate arrays
let names=["ravi","raju"];
let cars=["audi","BMW"];
let op=[...names,...cars];
console.log("conactenate");
console.log(op);

// spread operator using objects
let person={
    name:"Trilochan",
    age:27
};

console.log("---spread operator using objects----");

let personDetails={...person,city:"Hyderabad"};
console.log(personDetails);

// concatenate object
let address={
    city:"Hyderabad",
    pincode:500070
}

let completeDetails={...person,...address};
console.log("-------objects concatination using spread operator-----")
console.log(completeDetails);




// spreadoperator using spread operator
function add(a,b,c){
    console.log("a : "+a.toString());
    console.log("b : "+c.toString());
    console.log("c : "+c.toString());
    return a+b+c;
}

let numbers=[1,2,3,5,6];
console.log("spread operator as function call arguments");
console.log(add(...numbers));

// rest parameters
// rest parameter should be the lat parameter

function numbersusingRestparam(...args){
    console.log("---rest parameters using functions------");
    console.log(args);
}

numbersusingRestparam(1,2,3);





function exprestParam(a,b,...rest){
    console.log("---rest parameters using functions------");
    console.log("a : "+a.toString());
    console.log("b : "+b.toString());
    console.log("rest: ");
    console.log(rest);
}

exprestParam(1,2,3,4,5,6,7);


function sum(...args){
    let result=0;
    for (let a of args){
        result=result+a;
    }
    return result;
}


console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7));


// destructuring arrays
let [x,y,z,...remainingnums]=[1,2,3,4,5,6,7,8];
console.log("----------array destructuring-----");
console.log(x);
console.log(y);
console.log(z);
console.log(remainingnums);

// destructuring objects

let { firstName, ...remainingnumsInObject }={
    firstName:"trilochan",
    lastName:"Reddy",
    age:25
}
console.log("----------object destructuring-----");
console.log(firstName);
console.log(remainingnumsInObject);


// default parameters

function num(a=1,b=2){
    console.log("-----default parameters-------");
    console.log(a);
    console.log(b);
}
num();

function nums(a=1,b=2){
    console.log("-----default parameters-------");
    console.log(a);
    console.log(b);
}
nums(3);

function numbs(a=1,b=2){
    console.log("-----default parameters-------");
    console.log(a);
    console.log(b);
}
numbs(3,4);

// template literals
let myName="Trilochan";
console.log("---------template literals--------")
console.log("-embading variable----");
console.log(`Hello ${myName}`);



console.log("-embading expression----");
console.log(`the sum of 4 and 5 is  ${4+5}`);