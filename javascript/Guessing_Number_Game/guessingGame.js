let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
    console.log(randomNumber)
 
function checkGuess() {
    let inputValue=parseInt(userInput.value);
    
    if (inputValue === randomNumber){
        gameResult.textContent="Congratulations! You Got it Right.";
        gameResult.style.backgroundColor="green";
    }
    else if(inputValue>randomNumber){
        gameResult.textContent="Value Too High! Try Again.";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if (inputValue<randomNumber){
        gameResult.textContent="Value Too Low! Try Again.";
        gameResult.style.backgroundColor="#1e217c";
    }
    else{
        gameResult.textContent="Please provide a valid input.";
        gameResult.style.backgroundColor="#1e217c";
    }
}