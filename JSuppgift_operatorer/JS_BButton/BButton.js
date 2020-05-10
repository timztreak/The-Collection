////////////////////////////////////////////////////////////////////////////////
// Av Bengt Johansson bengts.privata@gmail.com
// 
//
// Klassen BBbutton_b för Bengt Button beta ;)
// representerar en knapp som ska placeras ut i en Canvas (HTML5). Den har diverse
// förvalda egenskaper (properties) som kan modifieras och även anpassas individuellt
// för de båda lägena Upp/Ned, dvs uppsläppt resp. nedtryckt. Knappen erbjuder enkel
// hantering men också en hel del inställningsmöjligheter.
//
// Knappen kräver ständig avläsning med någon av metoderna Pressed, Klicked,
// SwitchedOn eller Checked. Endast en av dessa metoder bör användas för en
// och samma knapp. De kan annars störa varandras funktion. Metoderna Update och
// Draw måste också anropas med täta intervall för att knappen ska uppdateras
// m.a.p. tillstånd och utseende.
//
// Klassen bör endast användas för prototyping då den inte är optimerad m.a.p.
// prestanda och saknar en del felhantering vid extremvärden. Den är dock genom
// sin flexibilitet lämplig att återanvända i många tillämpningar för HTML Canvas.
//
////////////////////////////////////////////////////////////////////////////////
// Senaste uppdatering: version 1 2019-02-27
//
// Ver. beta1: Betaversion med rektangulära knappar. Den har inte optimerats för//
//             prestanda och saknar en del felhantering. 
////////////////////////////////////////////////////////////////////////////////
// metod constructor(): Skapar knappobjektet med valbara egenskaper (förval).
// metod SetUpProp(): 	Sätter knappens visuella egenskaper i utsläppt läge, ändrar default.
// metod SetDownProp(): Sätter knappens visuella egenskaper i intryckt läge, ändrar default.
// metod Pressed(): 	Läser av om knappen trycks in. 
// metod SwitchedOn():	Läser av om knappen har tryckts in och inte tryckts ut igen.
// metod Checked():		Läser av knappen som en checkbox.
// metod Klicked(): 	Läser av om knappen har klickats på sedan förra avläsningen.
// metod Update():		Uppdaterar knappens tillstånd utifrån mushändelser över knappen.
// metod Draw(ctx): 	Renderar knappen på förvald plats i canvas utifrån tillstånd och förval.
class BButton_b1
{
	////////////////////////////////////////////////////////////////////////////
	// Skapar och placerar ut en knapp i en Canvas (HTML5).
	//
	// parameter x: 		heltalsvärde för knappens placerig i antal pixlar från canvas överkant
	// parameter y: 		heltalsvärde för knappens placerig i antal pixlar från canvas överkant
	// parameter minWidth:	heltalsvärde för minsta tillåtna bredd på knappen
	// parameter minHeight:	heltalsvärde för minsta tillåtna höjd på knappen
	// parameter color:		knappens färg (t.ex. 'red', '#F00' eller '#FF0000' för röd)
	// parameter borderWidth: heltalsvärde för knappramens linjebredd
	// parameter enabled:   om knappen ska vara aktiv och kan användas
	// parameter txt: 	    knapptext (kan utelämnas eller anges med tomma strängen "" om textlös
	// parameter txtColor:	knapptextens färg (kan utelämnas om txt utelämnas, default: 'black')
	// parameter fontSize:	knapptextens strolek i heltal pixlar (kan utelämnas om txtColor utelämnas, default: 18)
	// parameter font:		knapptextens font (kan utelämnas om fontSize utelämnas, default: 'Arial')
	// parameter emph: 	    knapptextens uttrycksstil (kan utelämnas om font utelämnas, default: 'bold')
	constructor(x, y, minWidth, minHeight, color, borderWidth, enabled = true, txt = "", txtColor = "black", fontSize = 18, font = "Arial", emph = "bold")
	{
		this.state = 0;				 // tillståndet som kanppen befinner sig i
		this.x = x;					 // knappens position i sidled
		this.y = y;					 // knappens position i höjdled	
		this.width = Math.max(minWidth, txt.length * fontSize * 0.7); // bredden på knappen
		this.color = color;	 		 // knappens bakgrundsfärg
		this.height = Math.max(minHeight, fontSize * 1.5);        	  // höjden på knappen
		this.borderWidth = borderWidth;					   	      	  // linjebredden på knappens ram
		this.enabled = enabled;		 // om knappen är aktiv och kan användas
		this.upImage = null;		 // bild på knappen som visas i utsläppt läge
		this.downImage = null;		 // bild på knappen som visas i intryckt läge
		this.upText = txt;			 // knappens text (text) i utsläppt läge
		this.downText = txt;			 // knappens text (text) i intryckt läge
		this.font = emph + " " + fontSize + "px " + font; 	   	   // knapptextens font incl. storlek
		this.simFont = emph + " " + (fontSize - 1) + "px " + font; // knapptextens font vid simulerad intryckning
		this.fontSize = fontSize;	 // knapptextens fontstorlek
		this.textColor = txtColor;   // knappens textfärg
		this.switchMode = false;  	 // om knappen ska växla och låsa läget vid varje klick
		this.view3D = true;		 	 // om knappen ska se tredimensionell ut
		this.simulatePush = true;	 // om knappens intryckning ska simuleras
		this.readDetected = false;   // om knappens tillstånd blivit avläst
		this.downLight = false;		 // om knappen ska lysa när den är i nere
		this.upLight = false;	     // om knappen istället ska lysa när den är uppe
		this.upAlpha = 1;			 // hur transparent knappens text och bild ska vara i övre läget
		this.downAlpha = 0.7;			 // hur transparent knappens text och bild ska vara i nedre läget
		this.offset = borderWidth * 0.1 // en offset som används för olika visuella effekter
	}
	
	////////////////////////////////////////////////////////////////////////////
	// Sätter allmäna egenskaper på knappens utseende.
	//
	// parameter light:  Om true så lyser knappen konstant.
	// parameter img:    Bild (filsökväg) som ska sättas på knappen permanent, annars "".
	// parameter transp: Värdet true gör knappdekoren permanent blir något transparent.
	SetPropertiesGeneral(light = false, img = "", transp = false, view3D = true)
	{
		this.upLight = light;
		this.downLight = light;
		if (img != "")
		{
			this.upImage = new Image();
			this.upImage.src = img;
			this.downImage = new Image();
			this.downImage.src = img;
		}
		this.upAlpha = (transp) ? 0.7 : 1;
		this.downAlpha = this.upAlpha;
		this.view3D = view3D;
	} // SetPropertiesGeneral
	
	////////////////////////////////////////////////////////////////////////////
	// Sätter särskilda egenskaper på knappens utseende i övre läget.
	//
	// parameter light:  Värdet true tänder knappen i läget.
	// parameter img:    Bild (filsökväg) som ska sättas på knappen i läget, annars "".
	// parameter txt:    Text som ska sättas på knappen i läget, annars "".
	// parameter transp: Värdet true gör knappdekoren blir något transparent i läget.
	SetPropertiesUp(light = false, img = "", txt = "", transp = false)
	{
		this.upLight = light;
		this.upAlpha = (transp) ? 0.7 : 1;
		if (img != "")
		{
			this.upImage = new Image();
			this.upImage.src = img;
		}
		if (txt != "")
		{
			this.upText = txt;
			this.width = Math.max(this.width, Math.max(txt.length, this.downText.length) * this.fontSize * 0.7);
		}
	} // SetPropertiesUp
	
	////////////////////////////////////////////////////////////////////////////
	// Sätter särskilda egenskaper på knappens utseende i nedre läget.
	//
	// parameter light:   Värdet true tänder knappen i läget.
	// parameter img:     Bild (filsökväg) som ska sättas på knappen i läget, annars "".
	// parameter txt:     Text som ska sättas på knappen i läget, annars "".
	// parameter transp:  Värdet true gör knappdekoren blir något transparent i läget.
	// parameter simPush: Värdet true gör att knappen ser intryckt ut i läget.
	SetPropertiesDown(light = false, img = "", txt = "", transp = true, simPush = true)
	{
		this.downLight = light;
		if (img != "")
		{
			this.downImage = new Image();
			this.downImage.src = img;
		}
		if (txt != "")
		{
			this.downText = txt;
			this.width = Math.max(this.width, Math.max(txt.length, this.upText.length) * this.fontSize * 0.7);
		}
		this.downAlpha = (transp) ? 0.7 : 1;
		this.simulatePush = simPush;	
	} // SetPropertiesDown

	////////////////////////////////////////////////////////////////////////////
	// Aktiverar knappen.
	Enable(val)
	{
		this.enabled = true;
	}

	////////////////////////////////////////////////////////////////////////////
	// Inaktiverar knappen.
	Disable()
	{
		this.enabled = false;
	}
	
	////////////////////////////////////////////////////////////////////////////
	// Avläser om knappen hålls nere.
	//
	// return: Värdet true om knappen hålls nere med vänster musknapp, annars false.
	Pressed()
	{
		if (!this.enabled)
		{
			console.log("Warning: Checking press of a disabled button.");
		}
		
		switch (this.state)
		{	
			case 1:
			case 4:
				return true;
				
			case 2:
			case 5:
				this.readDetected = true;
				break;
		}
		return false;
	}

	////////////////////////////////////////////////////////////////////////////
	// Avläser om knappen har tryckts in. Metoden gör att knappen förblir
	// intryckt (påslagen) tills den klickas på igen. Kan inte användas
	// tillsammans med metoden Klicked().
	//
	// return: Sekvensen nedan visar sambandet mellan musknapp och returvärde (1=true, 0=false).
	// 		   			musknapp = 10101010
	// 		     	  	  return = 11101110
	SwitchedOn()
	{
		if (!this.enabled)
		{
			console.log("Warning: Checking switch of a disabled button.");
		}
		
		switch (this.state)
		{	
			case 1:
				return true;
				
			case 2:
			case 3:
			case 4:
				// Use the higher states dedicated for this function.
				this.switchMode = true;			
				this.readDetected = true;	
				return true;
				
			case 5:
				this.readDetected = true;
				break;
		}
		return false;
		
	} // SwitchedOn
	
	////////////////////////////////////////////////////////////////////////////
	// Använd som checkbox avläes knappen precis på samma sätt som med metoden
	// SwitchedOn ovan.
	//
	// return: true om rutan icheckad, false annars  
	Checked()
	{
		return this.SwitchedOn();
	} // Checked
	
	////////////////////////////////////////////////////////////////////////////
	// Avläser om knappen klickats. Kan inte användas tillsammans med metoden
	// SwitchedOn().
	//
	// return: true om knappen klickats och detta ännu inte avlästs, annars false
	Klicked()
	{
		if (!this.enabled)
		{
			console.log("Warning: Checking klick of a disabled button.");
		}
		
		if (this.state == 2 || this.state == 5)
		{
			// Knappen klickad.
			this.readDetected = true;
			return true;
		}
		return false;
	} // Klicked
	
	////////////////////////////////////////////////////////////////////////////
	// Uppdaterar tillståndet för knappen.
	//
	// parameter cursorX: musmarkörens x-koordinat i antal pixlar när vänster
	//                    musknapp är nedtryckt, måste annars ha värdet 0.
	// parameter cursorY: musmarkörens y-koordinat i antal pixlar när vänster
	//                    musknapp är nedtryckt, måste annars ha värdet 0.
	Update(cursorX, cursorY)
	{
		if (!this.enabled)
		{
			return;
		}
		
		switch (this.state)
		{
			case 0: // Knappen uppe efter jämnt antal klick
			
				if ((cursorX > this.x) && (cursorX < (this.x + this.width)) &&
			        (cursorY > this.y) && (cursorY < (this.y + this.height)))
				{ // musknappen nedtryckt med markören över knappen
					this.state = 1;
				}			
				break;
				
			case 1: // knappen nedtryckt efter jämnt antal klick
			
				if (cursorX == 0 && cursorY == 0)
				{ // Musknappen släppt.			
					this.state = 2;
				}
				break;			
			
			case 2: // knappen klickad udda antal ggr
			
				if (this.readDetected)
				{ // klickhändelsen avläst			
					this.readDetected = false;
					this.state = this.switchMode ? 3 : 0;
				}			
				break;
			
			case 3: // Knappen uppe efter udda antal klick
			
				if ((cursorX > this.x) && (cursorX < (this.x + this.width)) &&
			        (cursorY > this.y) && (cursorY < (this.y + this.height)))
				{ // musknappen nedtryckt med markören över knappen				
					this.state = 4;
				}		
				break;
				
			case 4: // knappen nedtryckt efter udda antal klick
			
				if (cursorX == 0 && cursorY == 0)
				{ // musknappen släppt			
					this.state = 5;
				}
				break;
				
			case 5: // knappen klickad jämnt antal ggr
			
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
	// parameter ctx: kontexten för den canvas som knappen ska renderas på
	Draw(ctx)
	{
		// Måla en yttre ram för knappen.
		ctx.strokeStyle = "black";
		ctx.globalAlpha = 0.5;
		ctx.lineWidth = this.borderWidth;
		ctx.strokeRect(this.x - this.offset * 5, this.y - this.offset * 5,
					   this.width + this.borderWidth, this.height + this.borderWidth);
					   
		// Färga den tryckkänsliga delen av knappen.
		ctx.fillStyle = this.color;
		ctx.globalAlpha = 1;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	
		if (this.view3D)
		{ // Skapa en statisk 3D-effekt hos knappen.
	
			// Spegeleffekt (inre delen av knappen tonas ned och lämnar en ljusare rand).
			ctx.fillStyle = "black";
			ctx.globalAlpha = 0.2;
			ctx.fillRect(this.x + this.offset, this.y + this.offset * 3,
					     this.width - this.offset * 4, this.height - this.offset * 4);
					   
			// 3D-effekt (ett rektangulärt område tonas upp).
			ctx.fillStyle = this.color;		   
			ctx.globalAlpha = 0.6;
			ctx.fillRect(this.x - this.offset * 6, this.y - this.offset * 6,
						 this.width + this.offset * 12, this.height + this.offset * 12);
		}	

		if 	(this.state == 0 && this.upLight ||
			 this.state != 0 && this.downLight)		
		{   // Tänd knappen.
		
			// Allmänljus varmvitt
			ctx.fillStyle = "#ffff90";
			ctx.globalAlpha = 0.2;
			ctx.fillRect(this.x - this.offset * 6, this.y - this.offset * 6,
					 this.width + this.offset * 12, this.height + this.offset * 12);
					 
			// Extraljus centralt 
			ctx.globalAlpha = 0.2;
			ctx.fillRect(this.x + this.offset * 2, this.y + this.offset * 2,
					   this.width - this.offset * 4, this.height - this.offset * 4);	
		}		
        
		// Sätt rätt transparens för text och bild.
		ctx.globalAlpha = (this.state == 0) ? this.upAlpha : this.downAlpha;
		
		// Bild (om specificerad) sätts på knappen.
		var img = (this.state == 0) ? this.upImage : this.downImage;
		if (img != null)
		{ // Bild är specificerad
			if (this.state != 0 && this.simulatePush)
			{ // Intryckning simuleras och bilden måste krympas i paritet med resten
				ctx.drawImage(img, this.x + this.offset, this.y + this.offset,
				              this.width - this.offset * 2, this.height - this.offset * 2);
			}
			else
			{ // Bilden visas normalstor.
				ctx.drawImage(img, this.x, this.y, this.width, this.height);
			}
		}
		
		// Text (om specificerad) sätts på knappen.
		ctx.fillStyle = this.textColor;
		ctx.font = (this.state != 0 && this.simulatePush) ? this.simFont : this.font;
		ctx.textAlign = "center";
		var buttonText = (this.state == 0) ? this.upText : this.downText;
		if (buttonText != "")
		{ // Text är specificerad.
			ctx.fillText(buttonText, this.x + this.width * 0.5, this.y + this.height * 0.5 + this.fontSize * 0.3);
		}
		
		if (this.state != 0 && this.simulatePush)
		{ // Skapa dynamisk 3D-effekt att knappen trycks in (tona ned en inre ram).
			ctx.fillStyle = "black";
			ctx.globalAlpha = 0.4;
			ctx.lineWidth = this.borderWidth * 0.1;
			ctx.strokeRect(this.x + this.offset, this.y + this.offset,
						   this.width - this.offset * 2, this.height - this.offset * 2);
		}
		
		if (!this.enabled)
		{
			ctx.fillStyle = "black";
			ctx.globalAlpha = 0.5;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}
