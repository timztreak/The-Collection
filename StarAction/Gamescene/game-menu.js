function restartGame(){
  var url = "index.html";
	window.location = url;
}
function goBack(){
  var url = "../MainMenu/index.html";
	window.location = url;
}
//Här Börjar Ljud Functions\\
var myAudio = document.getElementById("myAudio");
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

