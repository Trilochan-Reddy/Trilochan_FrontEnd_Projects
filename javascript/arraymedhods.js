let myArr=[1,2,3,4];

// deleting spesidied no of elementsusing splice
// 1.1 splice()
// The splice() method changes the contents of an array.

// Using splice() method, we can

// Remove existing items
// Replace existing items
// Add new items
// 1.1.1 Removing existing items
// Syntax: arr.splice(Start, Delete Count)

// Start: Starting Index
// Delete Count: Number of items to be removed, starting from the given index

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
// The splice() method returns an array containing the deleted items.

// 1.1.2 Adding new items
// Syntax: arr.splice(Start, Delete Count, Item1, Item2 ... )

// Here the Item1, Item2 ... are the items to be added, starting from the given index

myArr.splice(0,0,"six",10.5);
console.log(myArr);
myArr.splice(3,0,"six",10.5);
console.log(myArr);


// replace items
// 1.1.3 Replacing existing items
// Syntax: arr.splice(Start, Delete Count, Item1, Item2 ... )

myArr.splice(2,2,true,false);
console.log(myArr);

// findIndex()
// 1.2 findIndex()
// The findIndex() method returns the first item's index that satisfies the provided testing function. If no item is found, it returns -1.

// Syntax: arr.findIndex(Testing Function)

// Here Testing Function is a function to execute on each value in the array.

let itemIndex=myArr.findIndex(function(eachItem){
    if (eachItem===4){
        return true
    }
    else{
        return false
    }
})

console.log(itemIndex);


let customerData=[
    {
        name:"trilochan",
        id:100
    },
    {
        name:"Dinesh",
        id:101
    },
    {
        name:"Ammulu",
        id:102
    },
]

console.log(customerData);

let dataIndex=customerData.findIndex(function(eachItem){
    if(eachItem.id===103){
        return true;
    }
    else{
        return false;
    }
})

console.log(dataIndex);

// includes()
// 1.3 includes()
// The includes() method returns true if the provided item exists in the array. If no item is found, it returns false.

// Syntax: arr.includes(item)

let newArray=[1,2,3,"four","six",true,10.5];
let result=newArray.includes(22);
console.log("output of includes():");
console.log(newArray);
console.log(result);

// 1.4 indexOf()
// The indexOf() method returns the first index at which a given item can be found in the array. If no item is found, it returns -1.
// Syntax: arr.indexOf(item)
let indexOfResult=newArray.indexOf(5);
console.log("output of indexOf():");
console.log(newArray);
console.log(indexOfResult);

// 1.5 lastIndexOf()
// The lastIndexOf() method returns the last index at which a given item can be found in the array. If no item is found, it returns -1.
// Syntax: arr.lastIndexOf(item)
let lastIndexOfResult=newArray.lastIndexOf(3);
console.log("output of lastIndexOf():");
console.log(newArray);
console.log(lastIndexOfResult);



// 1.6 find()
// The find() method returns the first item's value that satisfies the provided testing function. If no item is found, it returns undefined.
// Syntax: arr.find(Testing Function)

let ages=[17,18,19,20,21];

let value=ages.find(function(age){
    return age>20;
});
console.log("output of find():");
console.log(ages);
console.log(value);



// 1.7 unshift()
// The unshift() method adds one or more items to the beginning of an array and returns the new array length.
// Syntax: arr.unshift(item1,item2, ..., itemN)

let newArrayLength=newArray.unshift(11,12,"cool");
console.log("output of unshift():");
console.log(newArray);
console.log(newArrayLength);


// 1.8 shift()
// The shift() method removes the first item from an array and returns that removed item.
// Syntax: arr.shift()

let removedItem=newArray.shift();
console.log("output of shift():");
console.log(newArray);
console.log(removedItem);


// 1.9 concat()
// The concat() method can be used to merge two or more arrays.
// This method does not change the existing arrays but instead returns a new array.
// Syntax: let newArray = arr1.concat(arr2);

let array1=[1,2,3,4];
let array2=["one","two","three","four"];
let concatenatedArray=array1.concat(array2);
console.log("output of concat():");
console.log(array1);
console.log(array2);
console.log(concatenatedArray);


// 1.10 slice()
// The slice() method returns a portion between the specified start index and end index(end index not included) of an array into a new array.
// Syntax: arr.slice(startIndex, endIndex)


let sliceExampleArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let slicedArray=sliceExampleArray.slice(2,5);
console.log("output of slice():");
console.log(sliceExampleArray);
console.log(slicedArray);

// 1.11 join()
// The join() method creates and returns a new string by concatenating all of the items in an array, separated by commas or a specified separator string.
// If the array has only one item, then it will be returned without using the specified separator.
// Syntax: arr.join(separator)
// Here separator is a string used to separate each item of the array. If omitted, the array items are separated with a comma.

let joinExampleArray=[1,2,3,4,"one","two","three"];
let output=joinExampleArray.join(",");
console.log("output of join():");
console.log(joinExampleArray);
console.log(output);
console.log(typeof(output));
console.log(output.length);

// 1.12 sort()
// The sort() method sorts the items of an array and returns the sorted array. The default sort order is ascending.
// Syntax: arr.sort()

let sortExampleArray=[4,3,2,1,4];
let sortedArray=sortExampleArray.sort();
console.log("output of sort():");
console.log(sortExampleArray);
console.log(sortedArray);

// reverse()

let reverseArrayExample=[99,88,77,66,55];
let reversedArray=reverseArrayExample.reverse();
console.log("output of reverse():");
console.log(reverseArrayExample);
console.log(reversedArray);
