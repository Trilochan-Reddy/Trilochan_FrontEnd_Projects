let bulbImageElement=document.getElementById("bulbImage");
let catImageElemet=document.getElementById("catImage");
let switchStatusElement=document.getElementById("switchStatus");
let offButtonElement=document.getElementById("offSwitch");
let onButtonElement=document.getElementById("onSwitch");


function switchOff(){
    bulbImageElement.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageElemet.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatusElement.textContent="Switched  Off";
    offButtonElement.style.backgroundColor="#cbd2d9";
    onButtonElement.style.backgroundColor="#22c55e";
}

function switchOn(){
    bulbImageElement.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageElemet.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatusElement.textContent="Switched  On";
    offButtonElement.style.backgroundColor="#e12d39";
    onButtonElement.style.backgroundColor="#cbd2d9";    
}

