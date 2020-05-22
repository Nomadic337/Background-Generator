var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
setGradient()


function setGradient() {
    body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " 
	+ color2.value + ")";

	css.textContent = color1.value + ",  " + color2.value;
}

function randomHex() {
    var hex = '#'+ Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    return hex
}

function generateRandomButton() {
    color1.value = randomHex();
    color2.value = randomHex();

    setGradient()
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomButton);

