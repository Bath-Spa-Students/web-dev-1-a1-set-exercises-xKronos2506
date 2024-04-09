// to store the following array of colors from the JS code
var colors = [];

// variable for the amount of square
var numSquares = 6;

// placing variable with the equivalent of the following class or ID being fetched upon with its information.
var squares = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");

// function for the game initialization once the page loads
function init() {
    // variable to generate random colors
    colors = generateRandomColors(numSquares);
    // variable for choosing the color
    pickedColor = pickColor();
    // variable to change color display on the picked color
    colorDisplay.textContent = pickedColor;
    //variable to change the colors of the square
    for (var i = 0; i < squares.length; i++) {
        // adds the inital colors within the square variable
        squares[i].style.backgroundColor = colors[i];
        // adds a function to make the boxes clickable 
        squares[i].addEventListener("click", function() {
            //grabs the information on the click square of the color
            var clickedColor = this.style.backgroundColor;
            // configures the color that was clicked to the RGB color code displayed if correct or wrong (if correct, displays correct. But else, displays play again!. )
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?"; //an option to reset the game with the message "Play again"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// function to randomize color generation every game
function generateRandomColors(num) {
        var arr = []; //sets an array variable to aar, which stores the following values
        for (var i = 0; i < num; i++) { //for loop to iterate the amount of colors to generate, which are the options to choose if the game is ongoing
            arr.push(randomColor()); //calls the funtion to generate a random color unto the variable
        }
        return arr; //returns the function which repeats the whole function over and over
}

// a function to randomize the color to be guessed into the game
function pickColor() {
    var random = Math.floor(Math.random() * colors.length); //sets a variable which would generate a randomized value for the colors per game
    return colors[random]; //repeats the value in each game
}

// function to color change the square colors
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) { // for loop to iterate the color change of every square through the length variable
        squares[i].style.backgroundColor = color; //a variable which selects the squares indivudally, and sets its background color according to the following parameter within the function
    }
}

// function to randomly generate a color (for the text display)
function randomColor() {
    var r = Math.floor(Math.random() * 256); //randomizes option on the red category
    var g = Math.floor(Math.random() * 256); // randomizes option on the green category
    var b = Math.floor(Math.random() * 256); // randomizes option on the blue category
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function to reset the game (using the button)
function resetColors() {
    colors = generateRandomColors(numSquares); //a set variable that generates random colors upon reset
    pickedColor = pickColor(); //selects a random color within the array on reset
    colorDisplay.textContent = pickedColor;  //changes the color to be guessed
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]; // changes the color of the square on the reset
    }
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"; //sets the text of the button
}

// Initializes the game upon load
init();
