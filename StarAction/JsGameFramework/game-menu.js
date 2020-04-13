function restartGame(){
	window.open('index.html');
}
//Här Börjar Ljud Functions\\
var myAudio = document.getElementById("myAudio");
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
//Här Börjar Tillbaka Till Landingpage Functions\\
function loadHome() {
	if(isPlaying == true){

	}
}
