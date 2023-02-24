let myFormEl=document.getElementById("myForm");
let nameElement=document.getElementById("name");
let nameErrorMessageEl=document.getElementById("nameErrorMEssage");
let emailEl=document.getElementById("email");
let emailErrorMEssageEl=document.getElementById("emailErrorMEssage");

let statusEl=document.getElementById("status");
console.log(statusEl.value);

let statusElement=document.getElementById("status");
let genderMaleElement=document.getElementById("genderMale");
let genderFemaleElement=document.getElementById("genderFemale");


let formData={
    name:"",
    email:"",
    gender:"Male",
    status:"Active"

}

function validateFormData(formData){
    let {name,email}=formData;
    if (name===""){
        nameErrorMessageEl.textContent="required*";
    }
    if (email===""){
        emailErrorMEssageEl.textContent="required*";
    }
}

function submitFormData(formData){
    let url="https://gorest.co.in/public-api/users";
    let options={
        method:"POST",
        headers:{
            "content-type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer a3f14f20b4129bfe3890cc14c5ab3f5fde958440f8c1457db66e2a0b4e994a5c"
        },
        body:JSON.stringify(formData)
    }
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        if (jsonData.code===422){
            if (jsonData.data[0].message==="has already been taken" && jsonData.data[0].field==="email")
            emailErrorMEssageEl.textContent="Email has alreadty taken"
        }
    })
}


// blue event willl occur when focus lost
// nameElement.addEventListener("blur",function(event){});
nameElement.addEventListener("change",function(event){
    console.log("blur event triggered");
    console.log(event.target.value);
    if (event.target.value===""){
        // let paragraphElement=document.createElement("p");
        // paragraphElement.textContent="required*";
        // nameElement.appendChild(paragraphElement);
        nameErrorMessageEl.textContent="required*";
    }
    else{
        nameErrorMessageEl.textContent="";
    }
    formData.name=event.target.value;
    console.log(formData);
});

// blue event willl occur when focus lost
emailEl.addEventListener("change",function(event){
    console.log("blur event triggered");
    console.log(event.target.value);
    if (event.target.value===""){
        // let paragraphElement=document.createElement("p");
        // paragraphElement.textContent="required*";
        // nameElement.appendChild(paragraphElement);
        emailErrorMEssageEl.textContent="required*";
    }
    else{
        emailErrorMEssageEl.textContent="";
    }
    formData.email=event.target.value;
    console.log(formData);
});

// change event will occur when status is changed
statusElement.addEventListener('change',function(event){
    formData.status=event.target.value;
    console.log(event.target.value);
    console.log(formData);
});

// change event will occur when status is changed
genderMaleElement.addEventListener('change',function(event){
    formData.gender=event.target.value;
    console.log(event.target.value);
    console.log(formData);
})

// change event will occur when status is changed
genderFemaleElement.addEventListener('change',function(event){
    formData.gender=event.target.value;
    console.log(event.target.value);
    console.log(formData);
})

// when submit event triggered
myFormEl.addEventListener('submit',function(event){
    // console.log(event);
    event.preventDefault();

    // form Level Validations

    validateFormData(formData);
    submitFormData(formData);
});
