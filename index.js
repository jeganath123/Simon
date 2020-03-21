//declaration
var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var levelCount = 0;
var randomChosenColor
var randomNumber

//start
$("#level-title")
$(document).keypress(function() {
  nextSequence();
});

//userChosenColor button
var userChosenColor;
$(".btn").click(function() { // click event find the button press
  userChosenColor = this.id; // this.id gives the id i.e("green") and saving it in the userChosenColor
  playsound(userChosenColor); //play sound for the particular color by pcalling the playsound function
  animatePress(userChosenColor); //blink the buttons
  userClickedPattern.push(userChosenColor); //push the value eg."green" to the userClickedPattern array

  //check the user sequence
  var currentlevel = userClickedPattern.indexOf(userChosenColor) //get the index value of the particular element
  checkAnswer(currentlevel); //calling the checkAnswer function to compare the uservalue vs randomvalue


});

//animatefunction
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#" + currentColor).removeClass("pressed")
}

//sound function
function playsound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

//check answer forin
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("success1")
    console.log(userClickedPattern)
    console.log(gamePattern)
    if (userClickedPattern.length === gamePattern.length) {
      console.log("success2")
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    var gameOverSound=new Audio("sounds/wrong.mp3");
    gameOverSound.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },500);

      $("#level-title").html("Game Over, Press Any Key to Restart");
      levelCount=0;
      gamePattern = [];
    console.log("fail")
  }
}

//nextsequence
function nextSequence() {
  userClickedPattern = []; //empty the userClickedPattern array
  levelCount++; //increase the levelCount
  $("#level-title").html("level " + levelCount); //Replacing title with the levelCount value
  randomNumber = Math.floor(Math.random() * 4); //generating randomNumber value and assigning between 0-3
  randomChosenColor = buttonColors[randomNumber]; //getting the array value of the buttonColors by creating index using randomNumber
  playsound(randomChosenColor); //play sound for the particular color by pcalling the playsound function
  gamePattern.push(randomChosenColor); //push the value eg."green" to the gamePattern array
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //blink the buttons
  console.log(gamePattern)


}
