/////////////////////////////////////////////////////////////////////////////////////////////////////
// Av Bengt Johansson för undervisning i kursen Programmering 1 enl. GY11
//
// Detta är ett testramverk för enstaka händelsedrivna komponenter skrivna i Javascript.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Senaste uppdatering: version 4 2019-02-22

// Ver. 1: Test av klasserna Button och ButtonSimple.
/////////////////////////////////////////////////////////////////////////////////////////////////////
var testCanvas;				// Referens till aktuell canvas i html-dokumentet
var testContext;			// Kontexten för spelet som renderas i vår canvas
var testWidth;				// Spelfönstrets bredd
var testHeight;				// Spelfönstrets höjd
var mouseX = 0;				// Musens position i X-led
var mouseY = 0;				// Musens position i Y-led

// Koppla en refrens till HTML-sidans canvas och sätt kontexten för denna.
// Det är i detta "fönster" som testet visas.
testCanvas = document.getElementById("myCanvas");
testContext = testCanvas.getContext("2d");

// Hämta bredd och höjd på canvas från HTML-sidan.
testWidth = document.getElementById("myCanvas").getAttribute("width");
testHeight = document.getElementById("myCanvas").getAttribute("height");

// Koppla mus-händelser till funktioner som ska hantera dessa.
testCanvas.onmousedown = OnMouseDown;
testCanvas.onmouseup = OnMouseUp;


// Anropas vid nedtryckning av vänster musknapp
// Param e: Den händelse (event) som gav upphov till anropet
function OnMouseDown(e)
{
	if (event.which != 1) {
		alert ("Höger musknapp fungerar inte här. Prova vänster musknapp istället.")
		return;
	}

	mouseX = e.clientX;   // Musens position i X-led
	mouseY = e.clientY;	  // Musens position i Y-led

	// Justera för canvas position på webbsidan
	mouseX -= testCanvas.offsetLeft;
	mouseY -= testCanvas.offsetTop;
}

// Agerar på släpp av vänster musknapp
// Param e: Den händelse (event) som gav upphov till anropet
function OnMouseUp(e)
{
	mouseX = 0;
	mouseY = 0;
}

class TestBar
{
	constructor(x, y, color, maxLength)
	{
		this.x = x;
		this.y = y;
		this.color = color;
		this.maxLength = maxLength;
		this.length = 0;
	}
	
	Set(length)
	{
		this.length = length;
	}
	
	Increase(inc)
	{
		this.length += inc;
		if (this.length > this.maxLength)
		{
			this.length = this.maxLength;
		}
	}
	
	Decrease(dec)
	{
		this.length -= dec;
		if (this.length < 0)
		{
			this.length = 0;
		}
	}
	
	Draw(ctx)
	{
		ctx.fillStyle = "black";
		ctx.globalAlpha = 1;
		ctx.fillRect(this.x, this.y, this.maxLength, 20);
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.length, 20);
	}
}