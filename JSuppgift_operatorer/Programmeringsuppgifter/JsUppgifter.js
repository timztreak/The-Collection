// Bengt Johansson 2019-09-09
//
// Den här filen innehåller en programmeringsmiljö för att lösa programmeringsuppgifter
// i javascript. Filen stöds av bakgrundsfunktioner för hantering av händelser "event"
// och formatering och utskrifter av text i den canvas som används för att visualisera
// resultat från tester.
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// INSTRUKTIONER
//
// Uppgifterna som ska lösas finns här i form av funktioner. Dessa ska färdigställas
// och sedan testas från HTML-sidan. Uppgifterna här hanterar främst operatorer, men
// även if-sater behövs. Information om detta finns via dessa länkar:
//    https://www.w3schools.com/jsref/jsref_operators.asp  (operatorer)
//    https://www.w3schools.com/jsref/jsref_if.asp         (if-satser)
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 1: Beräkna arean av en cirkel från dess diameter.
//
//      Tips: Använd lämpliga aritmetiska operatorer. Värdet på konstanten pi fås med
//            'Math.PI' där 'Math' är ett matematikobjekt i Javascript och 'PI' en
//            konstant i objektet som håller värdet av pi. För ytterigare information
//            följ länken -> https://www.w3schools.com/js/js_math.asp
//==================================================================================
// Parameter inX : diametern på cirkeln
// Return        : cirkelns area
function Uppgift1(inX)
{
	var circleDiameter = inX;
  var circleRadius = inX/2;
	var circleArea;
	/* Skriv dina instruktioner här */
	circleArea = Math.PI * circleRadius * circleRadius;

	return circleArea;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 2: Beräkna det reapris en vara får efter att en rabatt dragits av från
//            det ordinarie priset.
//  Utveckla: Avrunda svaret till två decimaler så att det blir hela ören.
//      Tips: Värdet som är ett flyttal (Number) behöver nu omvandlas till en sträng
//            för att kunna avrundas till önskat antalet decimaler, följ länken ->
//            https://www.w3schools.com/jsref/jsref_tofixed.asp
//==================================================================================
// Parameter inX : det ordinarie priset på varan (i kr)
// Parameter inY : rabatten angiven i procent
// Return        : reapriset, dvs priset på varan efter att rabatten dragits av från
//                 det ordinarie priset.
function Uppgift2(inX, inY)
{
	var regularPrice = inX;
	var discount = inY;
	var discountedPrice; 	// reapriset

	/* Skriv dina instruktioner här */


	return (inX - (inX * (inY/100)));
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 3: Bokför ett konto och hantera upprepade insättningar och uttag.
//            Insättning och uttag ska kunna göras samtidigt och ske vid varje klick
//            på knappen 'Kör!'.
//
//      Tips: Kontot är redan skapat och det som en global variabel med namnet
//            'myAccount'. Genom att variabeln är global behåller den värdet mellan
//            funktionsanropen. En variabel som deklareras utanför funktionen är
//            global. Om variabeln deklareras med 'let' måste deklarationen stå på
//            en rad som läses innan raden där den används. Med 'var' har ordningen
//            ingen teknisk betydelse, men tag ändå för vana att deklarera före
//            användning.
//==================================================================================
// Parameter inX : insättning i kronor
// Parameter inY : uttag i kronor
// Return        : saldot på kontot
var myAccount = 0;
function Uppgift3(inX, inY)
{
	/* Skriv dina instruktioner här */
	var withdraw = inY;
	var deposit = inX;

	if (inX<0) {
		return "Ta bort minustecken";
	}
	else if (inX>0) {
   myAccount += deposit;
	}
	else if (inY<0){
	  return "Ta bort minustecken"
	}
  else if (inY>0) {
  	myAccount -= withdraw
  }
   return myAccount;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 4: Avgör storleksordningen mellan två olika tal X och Y.
//
//      Tips: Använd jämförelse operatorer, samt satserna if, else if och else.
//            Följ länken -> https://www.w3schools.com/jsref/jsref_if.asp
//==================================================================================
// Parameter inX : talet X
// Parameter inY : talet Y
// Return        : den av följande strängar som motsvarar det korrekta svaret
//                 "X>Y", "X<Y" eller "X=Y".
function Uppgift4(inX, inY)
{
   if (inX > inY)
	 {
		return "X är större mannen";
	 }
   else if (inY > inX){
   	return "Y är större mannen";
   }
	 else if (inX == inY)
	 {
	 return "Y och X är lika stora mannen";
	 }


}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 5: Avgör om två tal X och Y båda var för sig är jämnt delbara med 3.
//
//      Tips: Använd den aritmetiska operatorn som kallas modulus för att testa vart
//            och ett av talen X och Y. Använd sedan den logiska operatorn som kallas
//            and för att testa att villkoret uppfylls av båda talen.
//==================================================================================
// Parameter inX : talet X
// Parameter inY : talet Y
// Return        : valfri text-sträng som visar utfallet.
function Uppgift5(inX, inY)
{
	/* Skriv dina instruktioner här */
	if (inX % 3 == 0 && inY % 3 == 0 )
	{
		return "Sant";
	}
  else {
  	return "Falsk"
  }
}
