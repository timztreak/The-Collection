////////////////////////////////////////////////////////////////////////////////
// Av Bengt Johansson för undervisning i kursen Programmering 1 enl. GY11
//
// Detta är tester med och för den egenutvecklade "javascript-klassen" BButton_b1.
//
////////////////////////////////////////////////////////////////////////////////
// Senaste uppdatering: ver.1 2019-02-27
//
// Ver.1: Tester med klassen SButton och BButton_b1.
//		  Grön knapp är på vid tryck.
//		  Röd  knapp stegar vid klick.
//
//        Tester med klassen SButton och BButton_b1.
//	      Grön knapp rad 1 är på vid tryck, har tjock ram, simulerad intryckning med dämpad text.
//        Grön knapp rad 2 är på vid tryck, har fix bredd och höjd, lyser vid av.
//        Grön knapp rad 3 är på vid tryck och lyser då, har fix bredd och höjd och permanent bild.
//
//        Röd  knapp rad 1 stegar vid klick, textanpassade mått, simulerad intryckning med dämpad text.
//        Röd  knapp rad 2 stegar vid klick, fix bredd, dämpad text vid av och tänd med klar text vid på.
//		  Röd  knapp rad 3 stegar vid klick, fix bredd och höjd, växlar bild.
//
//    	  Vit  knapp rad 1 används som check box med ett X som bock.
//        Vit  knapp rad 2 växlar på/av vid varje klick, tänds vid på, simulerad intryckning.
//        Vit  knapp rad 3 används som check box med en bild som bock.
//
////////////////////////////////////////////////////////////////////////////////
var testLoop;		// Referens till testloopen

////////////////////////////////////////////////////////////////////////////////
// Komponenter som ska testas

let sb1 = new SButton(200, 100, 60, 30, "green", "Håll in",  "white");
let sb2 = new SButton(400, 100, 60, 30, "red",  "Klicka", "black");

// Skapa en rad knappar (grön, röd, vit) i höjd med y=100.
let bb1 = new BButton_b1(200, 200, 0, 0, "green", 15, true, "Håll in",  "orange", 32);
let bb2 = new BButton_b1(400, 200, 0, 0, "red",    8, true, "Klicka", "white",  22);
let bb3 = new BButton_b1(600, 200,  80,  0, "white",  8, true, "Skifta",    "blue",  26);
bb2.SetPropertiesDown(false, "", "", false);
bb3.SetPropertiesDown(true, "", "", true);

// Skapa en rad knappar (grön, röd, vit) i höjd med y=200.
let bb4 = new BButton_b1(200, 300,  50, 50, "green", 10);
let bb5 = new BButton_b1(400, 300, 140,  0, "red",   10, true, "Klicka", "white", 28);
let bb6 = new BButton_b1(600, 300, 25, 25, "white", 4);

bb5.SetPropertiesDown(true, "", "", false, false);
bb6.SetPropertiesDown(false, "", '\u2714', false, false);

bb4.SetPropertiesUp(true);
bb5.SetPropertiesUp(false, "", "", true);

// Skapa en rad knappar (grön, röd, vit) i höjd med y=300.
let bb7 = new BButton_b1(200, 400, 70, 70, "green", 10);
let bb8 = new BButton_b1(400, 400, 60, 60, "red",    4);
let bb9 = new BButton_b1(600, 400, 50, 50, "white",  10, true, "", "red", 30);//);

bb7.SetPropertiesDown(true, "emoji.png", "", false);
bb8.SetPropertiesDown(false, "emoji2.png", "", false, false);
bb9.SetPropertiesDown(false, "", '\u2713', false, true);//"emoji.png");

bb7.SetPropertiesUp(false, "emoji.png", "", true);
bb8.SetPropertiesUp(false, "emoji.png");

////////////////////////////////////////////////////////////////////////////////
// Komponenter som ska visa funktionen
//
let testBar1 = new TestBar(200, 30, "#50FF50", 100);
let testBar2 = new TestBar(400, 30, "red", 	  100);
let testBar3 = new TestBar(600, 30, "white",  100);


////////////////////////////////////////////////////////////////////////////////
// Initialisering som körs så fort webbsidan laddats av webbläsaren.
//
function Initialise()
{
	// Kör igång test-loopen.
	StartTest();
}

////////////////////////////////////////////////////////////////////////////////
// Startar testet.
//
function StartTest()
{
	// Starta testloopen.
	testLoop = setInterval(function() {Test()}, 10);
}

////////////////////////////////////////////////////////////////////////////////
// Utför en iteration av spel-loopen
//
function Test()
{
	Update();
	Draw(testContext);
}

////////////////////////////////////////////////////////////////////////////////
// Uppdaterar alla komponenter.
//
function Update()
{
	////////////////////////////////////////////////
	// Hantera de två knapparna av typen SButton
	
	sb1.Update(mouseX, mouseY);
	sb2.Update(mouseX, mouseY);
	
	if (sb1.Pressed()){
		testBar1.Increase(0.1);
	}
	
	if (sb2.Klicked()) {
		testBar2.Increase(5);
	}
	
	////////////////////////////////////////////////
	// Hantera 1:a raden knappar av typen BButton_b1
	
	bb1.Update(mouseX, mouseY);
	bb2.Update(mouseX, mouseY);
	bb3.Update(mouseX, mouseY);

	if (bb1.Pressed()) {
		testBar1.Increase(0.1);
	}
	
	if (bb2.Klicked()) {
		testBar2.Increase(5);
	}
	
	if (bb3.Checked()){
		testBar3.Increase(0.1);
	}
	
	////////////////////////////////////////////////
	// Hantera 2:a raden knappar av typen BButton_b1
	
	bb4.Update(mouseX, mouseY);
	bb5.Update(mouseX, mouseY);
	bb6.Update(mouseX, mouseY);
	
	if (bb4.Pressed()) {
		testBar1.Increase(0.1);
	}
	
	if (bb5.Klicked()) {
		testBar2.Increase(5);
	}
	
	if (bb6.SwitchedOn()) {
		testBar3.Increase(0.1);
	}
	
	////////////////////////////////////////////////
	// Hantera 3:e raden knappar av typen BButton_b1
	
	bb7.Update(mouseX, mouseY);
	bb8.Update(mouseX, mouseY);
	bb9.Update(mouseX, mouseY);
	
	if (bb7.Pressed()) {
		testBar1.Increase(0.1);
	}
	
	if (bb8.Klicked()) {
		testBar2.Increase(5);
	}
	
	if (bb9.SwitchedOn()) {
		testBar3.Increase(0.1);
	}	

	return 0;
}

////////////////////////////////////////////////////////////////////////////////
// Renderar bakgrund och alla testobjekt som ska visas.
//
// Param ctx: Referensen till canvas.
function Draw(ctx)
{
	//================== BEGIN Starship game =====================
	// Rita bakgrunden
	ctx.globalAlpha = 1;
	ctx.fillStyle = "#707070";
	ctx.fillRect(0, 0, testWidth, testHeight);
		
	// Dra två horisontella linjer som separerar knaptyperna åt
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 80, 900, 3);
	ctx.fillRect(0, 170, 900, 3);
	
	// Sätt ut titlar i vänsterkanten
	ctx.font = "bold 20px Arial";
	ctx.textAlign = "left";
	ctx.fillText("Test Bars:", 10, 50);
	ctx.fillText("Simple Buttons:", 10, 120);
	ctx.fillText("Bengt Buttons:", 10, 210);
	
	// Rendera ribbor som fylls vid knapptryck
	testBar1.Draw(ctx);
	testBar2.Draw(ctx);
	testBar3.Draw(ctx);

	// Rendera två knappar av typen SButton
	sb1.Draw(ctx);
 	sb2.Draw(ctx);

	// Rendera 1:a raden knappar av typen BButton_b1
	bb1.Draw(ctx);
 	bb2.Draw(ctx);
	bb3.Draw(ctx);

	// Rendera 2:a raden knappar av typen BButton_b1
	bb4.Draw(ctx);
 	bb5.Draw(ctx);
	bb6.Draw(ctx);

	// Rendera 3:e raden knappar av typen BButton_b1
	bb7.Draw(ctx);
 	bb8.Draw(ctx);
	bb9.Draw(ctx);
}