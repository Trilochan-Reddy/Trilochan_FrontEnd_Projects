console.log("--------om---------");

const myPromise= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("1sec completed");
            reject("1sec completed")
        },1000);
    });
}

// console.log(myPromise());

myPromise().then( (fromResolve) => {
//   console.log(fromResolve)  ;
}).catch( (err)=>{
    // console.log(err);
})



// async/await
console.log("--------async/await----------");
const url="https://apis.ccbp.in/jokes/random"
const myPromise1=async ()=>{
    try{
        const response=await fetch(url);
        const jsonData=await response.json();
        console.log(jsonData);
    }
    catch(err){
        console.log(err);
    }
    
};

const asyncPromise=myPromise1();
console.log(asyncPromise);