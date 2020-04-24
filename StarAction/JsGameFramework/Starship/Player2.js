/////////////////////////////////////////////////////////////////////////////////////////////////////
// skapat av Bengt Johansson
//
// Denna klass kan användas med ramverket BProjGameJs ämnat för kursen Programmering 1 (enl. GY11)
/////////////////////////////////////////////////////////////////////////////////////////////////////

//==============================================================================
// Spelkaraktär iform av ett interstellärt rymdskepp :)
//==============================================================================
class Player2
{
	//==========================================================================
	// Konstruktor som skapar ett skepp-objekt.
	//==========================================================================
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.laserPool = new Array();
		this.laserCnt = 0;
		
		// Ladda 5 återanvändbara laserskott i en pool
		for (var i = 0; i < 5; i++)
		{
			this.laserPool.push(new LaserShotP2(50, 2, 5));
		}
	}

	//==========================================================================
	// Skeppets tillstånd uppdateras.
	//==========================================================================
	update() {
		
		// Agera på tangenttryckningar
		
		if (gKeysDown[gKeyCodesP2.LEFT] == true) {

			// Förflytta skeppet åt vänster
			this.x = this.x - 2;
		}
		else if (gKeysDown[gKeyCodesP2.RIGHT] == true) {

			// Förflytta skeppet åt höger
			this.x = this.x + 2;
		}
		if(gKeysDown[gKeyCodesP2.UP] == true) {
			this.y = this.y - 2;
		}	
		else if (gKeysDown[gKeyCodesP2.DOWN]){
			this.y = this.y + 2;
		}
		
		
		if (gKeysDown[gKeyCodesP2.SHOOT] == true) {
	
			// Kontrollera om tiden som gått sedan senaste skottet är tillräcklig
			if (gAppStepCount % 20 == 0) {
				
				// Skjut iväg en laser
				this.laserPool[this.laserCnt++].shoot(this.x, this.y);
				
				if (this.laserCnt >= this.laserPool.length) {
					this.laserCnt = 0;
				}
			}
			var laserSkot = new Audio("laserskot.mp3");
			laserSkot.src = "laserskot.mp3#t0.5, 2.5";
			laserSkot.play();
		}
		
		// Updatera alla laserskott
		for (var i = 0; i < this.laserPool.length; i++) {
			this.laserPool[i].update();
		}
	}
	
	//==========================================================================
	// Skeppet ritas ut i canvas.
	//==========================================================================	
	draw(ctx)
	{
		// Rita skeppet som en triangel och färglägg den
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + 10, this.y - 20);
		ctx.lineTo(this.x - 10, this.y - 20);
		ctx.closePath();
		ctx.fillStyle = "Cyan";
		ctx.fill();

		// Visa alla laserskott i canvas
		for (var i = 0; i < this.laserPool.length; i++) {
			this.laserPool[i].draw(ctx);
		}
	}
}

