function restartGame(){
  var url = "index.html";
	window.location = url;
}
function goBack(){
  var url = "../MainMenu/index.html";
	window.location = url;
}
//Här Börjar Ljud Functions\\
var myAudio = document.getElementById("gameMusicControler");
myAudio.volume = 0.05;
var isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
var start = new Date().getTime(),
  score = '0.1';

var interval = window.setInterval(function() {
  var time = new Date().getTime() - start;
  
  score = Math.floor(time / 100);
  
  if(score === 100) { 
    window.clearInterval(interval); 
    if(!alert("You guys didn't kill each other fast enough!\nPress 'OK' to play again, please kill each other this time")){
        window.location.reload();
    } 
  }

  document.getElementById('displayScore').innerHTML = score += '.00 Score';
});
/*
function p2Info(){
  var c = document.getElementById("p2Info")
  var ctx = c.getContext("2d");
  var header;
  header = ctx.font = "25px Roboto", ctx.fillText("Spelare 2", 10, 50);
  var shoot;
  shoot = ctx.font = "15px Roboto", ctx.fillText("Shoot: Right Enter", 10, 75);
  var p2Up;
  p2Up = ctx.font = "15px Roboto", ctx.fillText("Up: Up arrow", 10, 100);
  var p2Down;
  p2Down = ctx.font = "15px Roboto", ctx.fillText("Down: Down arrow", 10, 125);
  var p2Left;
  p2Left = ctx.font = "15px Roboto", ctx.fillText("Left: Left arrow", 10, 150);
  var p2Right;
  p2Right = ctx.font = "15px Roboto", ctx.fillText("Right: Right arrow", 10, 175);
  
};
p2Info();

function p1Info(){
  var c = document.getElementById("p1Info")
  var ctx = c.getContext("2d");
  var header;
  header = ctx.font = "25px Roboto", ctx.fillText("Spelare 1", 10, 50);
  var shoot;
  shoot = ctx.font = "15px Roboto", ctx.fillText("Shoot: T", 10, 75);
  var p1Up;
  p1Up = ctx.font = "15px Roboto", ctx.fillText("Up: W", 10, 100);
  var p1Down;
  p1Down = ctx.font = "15px Roboto", ctx.fillText("Down: S", 10, 125);
  var p1Left;
  p1Left = ctx.font = "15px Roboto", ctx.fillText("Left: A", 10, 150);
  var p1Right;
  p1Right = ctx.font = "15px Roboto", ctx.fillText("Right: D", 10, 175);
  
};
p1Info();
*/



var slider = document.getElementById("myRange");
var output = document.getElementById("myAudio");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

