// GET METHOD
/*let options={
    method:"GET"
};*/


// POST MEthod
/*let data={
    name: 'Trilochan Reddy Sama',
    email: 'smwn@exp.com',
    gender: 'male',
    status: 'Active'
};

let options={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer a3f14f20b4129bfe3890cc14c5ab3f5fde958440f8c1457db66e2a0b4e994a5c"
    },
    body:JSON.stringify(data)
}*/

// PUT METHOD

/*let data={
    name:'Trilochan S'
}
let options={
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer a3f14f20b4129bfe3890cc14c5ab3f5fde958440f8c1457db66e2a0b4e994a5c"
    },
    body:JSON.stringify(data)
}


let url="https://gorest.co.in/public-api/users/545535";
fetch(url,options)
.then(function(response){
    // console.log(response);
    // return response.text(); returns data in json format
    return response.json();
})
.then(function(jsonData){
    // let parsedData=JSON.parse(data);
    console.log(jsonData);
    console.log(typeof(jsonData));
});*/

// DELETE

let options={
    method:"DELETE",
    headers:{
        'Content-Type':"application/json",
        Accept:"application/json",
        Authorization:"Bearer a3f14f20b4129bfe3890cc14c5ab3f5fde958440f8c1457db66e2a0b4e994a5c"
    }
};
let url="https://gorest.co.in/public-api/users/545535";

fetch(url,options)
.then(function(response){
    return response.status;
})
.then(function(status){
    console.log(status);
})

