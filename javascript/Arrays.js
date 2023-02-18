let myArray=[4,"six",7.2,true];
console.log(myArray);
console.log(myArray[0]);
myArray[1]=6;
console.log(myArray);
console.log(myArray.length);
myArray.push(false);
console.log(myArray);

myArray.push(10);
console.log(myArray);

let lastItem=myArray.pop();
console.log(myArray);
lastItem=myArray.pop();
console.log(lastItem);

// creating h1 element in js
// let h1Element=document.createElement("h1");
// h1Element.textContent="Web Technologies";
// document.body.appendChild(h1Element);

// for..of loop

for (let eachItem of myArray){
    console.log(eachItem);
}
