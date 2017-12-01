var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	// mode buttons event listener
	for (var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy" ? numSquares=3: numSquares=6; //ternary operator
		reset();
	})
}

	// set up our squares
	for (var i =0; i <squares.length; i++){
	// add click listeners to the squares
	squares[i].addEventListener("click", function(){
		// grab color of click square 
		var clickedColor = this.style.background;
		// compare color to pickedColor 
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent="Play Again?";
		} else{
			// fade the color out
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
	reset();

}


function reset(){
	//generate all new colors
	colors = genRandomColors(numSquares);
	//pick a new random color from array
	pickedColor= pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent= pickedColor;
	// change colors of square 
	for(var i =0;i<squares.length; i++){
		if(colors[i]){
			//display all first before showing colors
			squares[i].style.display = "block" 
			squares[i].style.background=colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	// change back text content and background color
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	h1.style.background= "steelblue";
}




resetButton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent= pickedColor;
console.log(pickedColor);



function changeColors(color){ //takes in color string input
	// loop through all squares
	for(var i=0; i<colors.length; i++){
		// change each color to match given color
		squares[i].style.background = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function genRandomColors(num){
	// make an array
	var arr=[];
	// repeat num times
	for(var i =0; i<num;i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	var red = Math.floor(Math.random()*256)
	// pick a "green" from 0-255
	var green = Math.floor(Math.random()*256)
	// pick a "blue" from 0-255
	var blue = Math.floor(Math.random()*256)
	// "rgb(red, green, bluee"
	return "rgb(" + red + ", "+ green + ", "+ blue + ")";
}

