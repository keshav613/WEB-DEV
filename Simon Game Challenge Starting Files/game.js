var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keypress", function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

function checkAnswer(currentIndex) {
  if (currentIndex >= gamePattern.length || userClickedPattern[currentIndex] != gamePattern[currentIndex]) {
    ifWrong();
    startOver();
  }
  console.log("success");
  if (currentIndex == gamePattern.length - 1)
    setTimeout(nextSequence(), 1000);

}

function startOver(){
  started=false;
  level=0;
  gamePattern=[];
}

function ifWrong() {
  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over, Press Any Key to Restart");
}

function playSound(name) {
  var soundTrack = new Audio("sounds/" + name + ".mp3");
  soundTrack.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100);


}
