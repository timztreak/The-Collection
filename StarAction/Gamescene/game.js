/////////////////////////////////////////////////////////////////////////////////////////////////////
// skapat av Bengt Johansson
//
// Denna programfil utgör kärnan i BProjGameJs, ett egenutvecklat enkelt ramverk för spelutveckling i
// Javascript ämnat för kursen Programmering 1 (enl. GY11).
// 
// Ramverket innehåller grundläggande funktionalitet för att stödja ett spel i Javascript.
// Det innehåller ett exempel på ett påbörjat spel Starship som är körbart, men ramverket är
// generellt för alla typer av spel. Kod som tillhör exemplet är inramad mellan "BEGIN Starship" och
// "END Starship". Det är därför lätt att lokalisera och avlägsna kopplingarna till exemplet om man
// bestämmer sig för att göra ett eget spel från grunden.
//		Ramverket baseras på Canvas i HTML5 och erbjuder en tillståndsstyrd spel-loop. Hantering
// av input från tangentbord och mus är separerat från denna programfil och ligger i input_control.js.
//
// Globala identifierare som hör till ramverket bär prefixet g. Dessa är i bokstavsordning:
//		gApp
//		gAppState
//		gAppStepCount
//		gAppTimeStep
//  	gGameContext
//		gGameHeight
//		gGameWidth
//  	gStates
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Version 7 2020-01-13:
// - Exemplet Starship har gjorts objektrienterat.
// - Filstrukturen har organiserats med undermappar.
// - Lagt till g som prefix på globala variabler och konstanter.
// - Förbättrad kommentering allmänt.
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Tillstånd som används av spelprogrammet
const gStates = {
	STARTING 	: 1,
	PLAYING 	: 2,
	STOPPED 	: 3,
	PAUSED 		: 4
};

var gGameContext;			// Kontexten för spelet som renderas i vår canvas
var gGameWidth;				// Spelfönstrets bredd
var gGameHeight;			// Spelfönstrets höjd
var gApp;					// Applikationen som itererande loop
var gAppState;				// Huvudtillstånd i spelprogrammet
var gAppTimeStep;			// Tiden mellan iterationer (uppdateringar) i applikationen
var gAppStepCount;			// Räknare för antal iterationer som spel-loopen genomgått

//******************* BEGIN Starship game **********************************
var NotP1;
var NotP2;
var imageObj = new Image();
var explosion = new Image();
var wall;
//******************* END Starship game ************************************

//==========================================================================
// Initialisering som utförs när webbsidan laddats in i webbläsaren.
//==========================================================================
function initialize() {

	// Sätt den context som spelet ska visas i.
	gGameContext = gGameCanvas.getContext("2d");
	
	// Hämta bredd och höjd på canvas från HTML-sidan.
	gGameWidth = gGameCanvas.getAttribute("width");
    gGameHeight = gGameCanvas.getAttribute("height");

	//******************* BEGIN Starship game ******************************
	// Set a target image
	imageObj.src = 'Images/spaceBackground.jpg';
	explosion.src = 'art/explosion.gif'
	//******************* END Starship game ********************************

	// Kör igång spel-loopen.
	startApp();
}

//==========================================================================
// Startar applikationen och spel-loopen. Denna loop itererar innehållet
// periodiskt med korta intervall som ger tillräckligt snabb bilduppdatering.
//==========================================================================
function startApp() {
	// Sätt applikationens STARTING-tillstånd.
    gAppState = gStates.STARTING;

	// Sätt spelets uppdateringsintervall
	gAppTimeStep = 5;

	// Räkna applikationens uppdateringar
	gAppStepCount = 0;

	// STARTINGa applikationen (definierad av IterateApp) så att den körs med det intervall
	// som bestäms av gAppTimeStep.
	gApp = setInterval(function() { iterateApp() }, gAppTimeStep);
}

//==========================================================================
// Stoppar applikationen.
//==========================================================================
function stopApp() {
	clearInterval(gApp);
}

//==========================================================================
// Initialiserar en ny spelomgång.
//==========================================================================
function initNewGame() {
	NotP1 = new Player1(300, 750);
	NotP2 = new Player2(300, 100);
	
}

//==========================================================================
// Utför en iteration (uppdatering) av innehållet i applikationen, spelet.
//==========================================================================
function iterateApp() {
	
	switch (gAppState) {

		case gStates.STARTING :
		
			initNewGame();

			//##############################################################
			//# OBS! Skriv kod för att hantera startfönstret här.
			//##############################################################

			gAppState = gStates.PLAYING;
			break;

		case gStates.STOPPED :

			//##############################################################
			//# OBS! Tillståndet används inte f.n. och kan avlägsnas eller
			//#      användas senare.
			//##############################################################

			break;

		case gStates.PAUSED :

			if (gKeysDown[gKeyCodesP1.ESCAPE] == true) {
				// STARTINGa spelet
				gAppState = gStates.PLAYING;
			}
			break;

		case gStates.PLAYING :

			if (gKeysDown[gKeyCodesP1.ESCAPE] == true) {
				// Stoppa spelet
				gAppState = gStates.PAUSED;
			}
			else {
				update();
				draw(gGameContext);
				gAppStepCount++;
			}
			break;
    }
}
//Bullet Collision 
//==========================================================================
// Funktion som kan utföra alla förflyttningar i spelet.
//==========================================================================
function update() {
	//******************* BEGIN Starship game ******************************
	NotP2BulletCollided();
	NotP1BulletCollided();
	NotP1.update();
	NotP2.update();
	//******************* END Starship game ********************************
	//######################################################################
	//# OBS! Skriv din egen kod för uppdateringar här. Detta kan göras direkt
	//#      eller genom anrop till funktioner eller metoder i objekt.
	//######################################################################


	return 0;
}
function NotP2BulletCollided(){
	for(let i = 0; i < NotP1.laserPool.length; i++) {
		if(NotP1.laserPool[i].x >= NotP2.x && NotP1.laserPool[i].x <= NotP2.x + 
			10 && NotP1.laserPool[i].y >= NotP2.y && NotP1.laserPool[i].y <= 
			NotP2.y + 10)
		{ 
			return p2DeathScene();
	
		}
	}
	}
	function NotP1BulletCollided(){
		for(let i = 0; i < NotP2.laserPool.length; i++) {
			if(NotP2.laserPool[i].x >= NotP1.x && NotP2.laserPool[i].x <= NotP1.x + 
				20 && NotP2.laserPool[i].y >= NotP1.y && NotP2.laserPool[i].y <= 
				NotP1.y + 20)
			{ 
				return p1DeathScene();
		
			}
		}
		}

//==========================================================================
// Ritar (renderar) bakgrund och alla objekt som ska visas i spelet
// Param ctx: kontexten för och referensen till den canvas som ska renderas
//==========================================================================
function draw(ctx) {
	
	//******************* BEGIN Starship game ******************************
	// Rita bakgrunden
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(0, 0, gGameWidth, gGameHeight);

	// Rita målet
	ctx.drawImage(imageObj, 0, 0, 650, 850);

	if(gAppStepCount % 60 == 0){
		console.log(gGameWidth + " , " + gGameHeight);
	}
	
	// Låt skeppet rita sig självt och sådant som skeppet ansvarar för.
	NotP1.draw(ctx);
	NotP2.draw(ctx);
	WallCollision(ctx);
	
	//******************* END Starship game ********************************
	
	//######################################################################
	//# OBS! Skriv din egen kod för rendering här. Detta kan göras direkt
	//#      eller genom anrop till andra funktioner eller metoder i objekt.
	//######################################################################
}
	//Väggar
	class Wall{
		constructor(x, y, w, h, c){
			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
			this.color = c;
		}
	
		draw(ctx){
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	var Wall1 = new Wall(-1, 0, 3, 850, "cyan"); 
    var Wall2 = new Wall(600, 0, 3, 850, "cyan");
	var Wall3 = new Wall(0, 422, 600, 5, "cyan");
	var spawn1 = new Wall(300, 750, 0, 0, "cyan");	
	
	function WallCollision(ctx){
		if(NotP1.x <= Wall1.x || NotP1.x >= Wall2.x || 
		   NotP1.y <= Wall3.y + Wall3.height &&
		   NotP1.y >= Wall3.y || NotP1.y >= 850) {
			return p1DeathScene();
		}
	  
		if(NotP2.x <= Wall1.x || NotP2.x >= Wall2.x || 
		   NotP2.y <= Wall3.y + Wall3.height &&
		   NotP2.y >= Wall3.y || NotP2.y <= 0) {
			return p1DeathScene();
		  }
		Wall3.draw(ctx);
	  }

	  function p1DeathScene(){
		var url = "../Deathscene/P1DeathScene/P1Death.html";
		  window.location = url;
	  }	  
	  function p2DeathScene(){
		var url = "../Deathscene/P2DeathScene/P2Death.html";
		  window.location = url;
	  }	  
