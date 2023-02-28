let dateCal=document.getElementById("dateCal");
dateCal.addEventListener("change",function(event){
    let date=(event.target.value);
    let dater=document.getElementById("dater");
    dater.textContent="today date is "+date;
    dater.style.color="red";
})
// console.log(dateCal.value);
// 
// dater.textcontent=dateCal.value;


