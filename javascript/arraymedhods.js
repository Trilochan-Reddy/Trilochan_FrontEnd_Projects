let myArr=[1,2,3,4];

// deleting spesidied no of elementsusing splice
let deletedItems=myArr.splice(0,2);
console.log(myArr);
console.log(deletedItems);
myArr.push(6);
let deletedElement=myArr.pop();
console.log(myArr);
console.log(deletedElement)
myArr.splice(2,0);
console.log(myArr);


// adding elements using splice from start index
myArr.splice(0,0,"six",10.5);
console.log(myArr);
myArr.splice(3,0,"six",10.5);
console.log(myArr);


// replace items
myArr.splice(2,2,true,false);
console.log(myArr);

let itemIndex=myArr.findIndex(function(eachItem){
    if (eachItem===4){
        return true
    }
    else{
        return false
    }
})

console.log(itemIndex);