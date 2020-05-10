/////////////////////////////////////////////////////////////////////////////////////////////////////
// skapat av Bengt Johansson
// 
// Denna programfil ingår BProjGameJs, ett egenutvecklat enkelt ramverk för spelutveckling i
// Javascript ämnat för kursen Programmering 1 (enl. GY11). Ramverket presenteras utförligare i
// programfilen game.js.
//
// Den här programfilen hanterar asynkrona händelser från tangentbord och mus.
//
// Globala identifierare som hör till ramverket bär prefixet g. Dessa är i bokstavsordning:
//		gGameCanvas
// 		gKeyCodes
//		gKeysDown
//		gMouse
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Senaste uppdatering: version 1 2019-03-30
// Programmet hanterar enklare input från tangentbord och mus. Funktionaliteten är utflyttad från
// gameStarship5.js som bytt namn till game.js.
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Tangenter som används för att styra spelprogrammet
const gKeyCodesP1 = {UP : 87, DOWN : 83, LEFT : 65, RIGHT : 68, SHOOT : 84};
const gKeyCodesP2 = {UP : 38, DOWN : 40, LEFT : 37, RIGHT : 39, SHOOT : 13};

// Referens till aktuell canvas i html-dokumentet
var gGameCanvas;				

// Koppla en refrens till HTML-sidans canvas och sätt kontexten för denna.
gGameCanvas = document.getElementById("myCanvas");

// Koppla mus-händelser till funktioner som ska hantera dessa.
gGameCanvas.onmousedown = onMouseDown;
gGameCanvas.onmouseup = onMouseUp;

// Koppla tangentbords-händelser till funktioner som ska hantera dessa.
document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

// Array som håller reda på vilka tangenter som är nedtryckta
var gKeysDown = [];

// Musmarkörens position i X- och y-led
var gMouse = {
	x : 0,
    y : 0
}

// Lyssnar efter och memorerar tangenter som är nedtryckta
// Param e: Den händelse (event) som gav upphov till anropet
function onKeyDown(e) {

	// Hantera händelser "event" även i Internet Explorer
	e = e || window.event;

    gKeysDown[e.keyCode] = true;
}

// Lyssnar efter och nollställer tangenter som släpps upp
// Param e: Den händelse (event) som gav upphov till anropet
function onKeyUp(e) {

	// Hantera händelser "event" även i Internet Explorer
	e = e || window.event;

    gKeysDown[e.keyCode] = false;
}

// Agerar på nedtryckning av vänster musknapp
// Param e: Den händelse (event) som gav upphov till anropet
function onMouseDown(e)
{
	if (event.which != 1) {
		alert ("Höger musknapp fungerar inte här. Använd vänster musknapp.")
		return;
	}

	gMouse.x = e.clientX;   // Musens position i X-led
	gMouse.y = e.clientY;	  // Musens position i Y-led

	// Justera för canvas position på webbsidan
	gMouse.x -= document.getElementById("myCanvas").offsetLeft;
	gMouse.y -= document.getElementById("myCanvas").offsetTop;
}

// Agerar på släpp av vänster musknapp
// Param e: Den händelse (event) som gav upphov till anropet
function onMouseUp(e)
{
	gMouse.x = 0;
	gMouse.y = 0;
}
