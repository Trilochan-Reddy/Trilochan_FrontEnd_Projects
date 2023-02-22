let timerEl=document.getElementById("timer");
let defuserEl=document.getElementById("defuser");


let countDown=10;
let uniqueId=setInterval(function(){
    timerEl.textContent=countDown;
    countDown=countDown-1;
    if (countDown===0){
        timerEl.textContent="Boom";
        clearInterval(uniqueId);
    }
},1000);


defuserEl.addEventListener('keydown',function(event){
    let correctCode=event.target.value;
    console.log(correctCode);
    
    if(event.key==="Enter" && correctCode==="defuse" && countDown !==0 ){
        timerEl.textContent="Boom Defused";
        clearInterval(uniqueId);
    }
});



