////////////////////////////////////////////////////////////////////////////////
// Av Bengt Johansson för användning i undervisning av programmering 1 enl. GY11.
//
// Klassen SButton (Simple Button) Representerar en enkel knapp som ska placeras
// ut på en Canvas (HTML5). Den är just enkel och erbjuder bara två funktioner,
// dels att läsa av om knappen hålls nedtryckt, dels att läsa av ett enkelklick.
//
// Metoderna Update och Draw måste anropas med täta intervall liksom den metod 
// (Pressed eller Klicked) som ska läsa av knappens tillstånd. Metoderna Update
// och Draw måste också anropas med täta intervall för att knappen ska uppdateras
// m.a.p. tillstånd och utseende.
// 
// constructor():   Skapar knappobjektet med tre valbara egenskaper, se nedan.
// metod Pressed(): Testar om knappen tryckts ned. 
// metod Klicked(): Testar om knappen klickats.
// metod Update():  Uppdaterar tillståndet hos knappen.
// metod Draw(ctx): Renderar knappen på förvald plats i canvas.
class SButton
{
	////////////////////////////////////////////////////////////////////////////
	// Skapar och placerar ut en knapp i en Canvas (HTML5).
	// parameter x: 	heltalsvärde för antal pixlar från canvas överkant
	// parameter y: 	heltalsvärde för antal pixlar från canvas överkant
	// parameter txt:   valfri knapptext (sträng, t.ex. "Ok")
	// parameter txtColor: färg på knapptexten (sträng t.ex. "red" eller "#F00")
	constructor(x, y, width, height, color, txt, txtColor)
	{
		this.state = 0;					// knappens tillstånd
		this.x = x;						// knappens horisontella placering
		this.y = y;						// knappens vertikala placering
		this.width = width;				// knappens bredd
		this.height = height;			// knappens höjd
		this.color = color;				// knappens färg
		this.txt = txt;					// knapptext
		this.txtColor = txtColor;		// knappens textfärg
		this.font = "bold 20px Arial"; 	// fonten på knapptexten
		this.readDetected = false;		// om knappen klickats
	} // constructor

	////////////////////////////////////////////////////////////////////////////
	// Avläser om användaren håller ned vänster musknapp med markören över denna knapp.
	//
	// return: true om knappen nedtryckt, annars false
	Pressed()
	{
		if (this.state == 1)
		{ // Knappen nedtryckt
			return true;
		}
		else if (this.state == 2)
		{ // Knappen uppsläppt igen
			this.readDetected = true;
		}
		
		return false;
	} // Pressed
	
	////////////////////////////////////////////////////////////////////////////
	// Avläser om knappen klickats.
	//
	// return: true om knappen klickats och detta ännu inte avlästs, annars false
	Klicked()
	{
		if (this.state == 2)
		{
			// Knappen klickad
			this.readDetected = true;
			return true;
		}
		return false;
	} // Klicked

	////////////////////////////////////////////////////////////////////////////
	// Uppdaterar tillståndet för knappen
	//
	// parameter cursorX: musmarkörens x-koordinat i antal pixlar när vänster
	//                    musknapp är nedtryckt, måste annars ha värdet 0.
	// parameter cursorY: musmarkörens y-koordinat i antal pixlar när vänster
	//                    musknapp är nedtryckt, måste annars ha värdet 0.
	Update(cursorX, cursorY)
	{
		switch(this.state)
		{
			case 0: // knappen uppe	
				if ((cursorX > this.x) && (cursorX < (this.x + this.width)) &&
			        (cursorY > this.y) && (cursorY < (this.y + this.height)))
				{ // musknappen nedtryckt med markören över knappen
					this.state = 1;
				}			
				break;
				
			case 1: // knappen nere
				if (cursorX == 0 && cursorY == 0)
				{ // Musknappen släppt					
					this.state = 2;
				}
				break;			
			
			case 2: // knappen nedklickad
				if (this.readDetected)
				{ // klickhändelsen avläst
					this.readDetected = false;
					this.state = 0;
				}			
				break;			
		}
	} // Update
	
	////////////////////////////////////////////////////////////////////////////
	// Renderar knappen enligt sina egenskaper på en canvas.
	//
	// parameter ctx: referens till den canvas-kontext som knappen ska renderas på	
	Draw(ctx)
	{
		ctx.fillStyle = this.color;
		ctx.globalAlpha = 1;
		ctx.fillRect(this.x, this.y, this.width, this.height);	
		ctx.fillStyle = this.txtColor;
		ctx.font = this.font;
		ctx.textAlign = "center";
        ctx.fillText(this.txt, this.x + this.width * 0.5, this.y + 20);
	} // Draw
}
