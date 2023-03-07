console.log("------------om-----------");

console.log("------------trim()-----------");
const greeting="   hello world!       ";
console.log(greeting);
console.log(greeting.trim());

console.log("------------sclice-----------");

const text="My Name Is Trilochan";
console.log(text.slice(1,4));
console.log(text.slice(2,5));


console.log("------------toUpperCase()-----------");
console.log(text.toUpperCase());


// scope of a variable
console.log("---------scope of a variable-------");
const x=30;
function foo(){
    const x=40;
    if (x>30){
        console.log(x);
    }
}

foo();



// map method in js
console.log("-------map method in js--------");
const numbers=[1,2,3,4];
const result=numbers.map( (number) =>number*number
) 
console.log(result);

// filter method in js
console.log("-------filter method in js--------");
const filterExampleNumbers=[1.-2,3,-4,5];
const filterResult=filterExampleNumbers.filter((number)=>number>0);
console.log(filterResult);


// reduce method in js
console.log("---------reduce methos in js arrays");
const reduceNumbers=[1,2,3,4];
const resultOfReduce=reduceNumbers.reduce((acc,currentNum)=>acc+currentNum);
console.log(resultOfReduce);