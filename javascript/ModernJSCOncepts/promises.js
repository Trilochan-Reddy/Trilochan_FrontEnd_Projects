console.log("------------om---------");
// alert is synchronous

// alert("first line");
// alert("second line");
// alert("third line");


// asynchronous example
// console.log("----fetch is a asynchronous-------------- ");
// const url="https://apis.ccbp.in/jokes/random";

// fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((jsonData)=>{
//     console.log(jsonData);
// })
// console.log("fetching done");


// promises
console.log("----promisess-------------- ");
const url="https://apis.ccbp.in/jokes/random";
const responsePromise= fetch(url); 

responsePromise
.then((response)=>{
    console.log("---then is called so that promise object is returned when response.jsopn() is called--");
    // console.log(response.json());
    return response.json();
})
.then( (jsonData) => {
    console.log("-data field is called---------");
    console.log(jsonData);
});



// calling catch if any error occured
// .catch((error)=>{
//     console.log("--catch is called---");
//     console.log(error);
// })

// console.log(responseObject);
// console.log("fetching donde");