function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Morning");

}



displayGreeting(function(){
    console.log("Trilochan");
});

console.log("-----------------");

// function defination ---created displayTrilochan() function
function displayTrilochan(){
    console.log("Trilochan")
}

displayGreeting(displayTrilochan);  //providing function name as argument to a function