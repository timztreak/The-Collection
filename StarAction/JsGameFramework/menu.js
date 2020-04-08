//==============================================================================
// Detta är en mall för en menyklass med valfritt antal kanppar som placeras
// under varandra. Den kan enkelt modifieras så att knapparna placeras bredvid
// varandra.
//==============================================================================
class Menu
{
	//==========================================================================
	// Konstruktor som skapar ett skepp-objekt.
	//==========================================================================
	constructor(x, y, height, width, rx, ry, nrButons)
	{
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.rx; // relativ placering (x-led) av knapp i menyn
		this.ry; // relativ placering (y-led) av knapp i menyn
		this.nrButons; // Antal knappar
		this.buttons = new Array();
		
		// Skapa knappar och placera de i en lista
		for (var i = 1; i <= this.nrButons; ++i)
		{
			this.buttons.push(new Button(this.x + this.rx,
										 this.y + this.ry * (i * 10), /* 10 är höjden på knappen */
										 20,   /* 20 är bredden på knappen */
										 10,   /* 10 är höjden på knappen */
										 /* fyll på med övriga argument */));
		}
	}
	//==========================================================================
	// Menyn uppdateras.
	//==========================================================================
	update() {
		
		// Uppdaterar knappar
		for (var i = 0; i < this.nrButons; ++i)
		{
			this.buttons[i].update();
		}
	}
	
	//==========================================================================
	// Menyn ritas ut i canvas.
	//==========================================================================	
	draw(ctx)
	{
		/* Rita ut menyns bakgrund här! */
			
		// Ritar ut knappar
		for (var i = 0; i < this.nrButons; ++i)
		{
			this.buttons[i].draw();
		}
	}
}
    var ctrlB = new Menu(0, 0, 250, 100, 0, 0, 3,);