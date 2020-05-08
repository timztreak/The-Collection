// Bengt Johansson 2019-09-16
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
// och sedan testas från HTML-sidan.
//
// Just dessa uppgifter hanterar främst kontrollstrukturer. Information om dessa finns
// via länkarna nedan.
//
//    Länkar
//    =============================================================
//    https://www.w3schools.com/jsref/jsref_statements.asp  (kontrollstrukturer)
//	  https://www.w3schools.com/jsref/jsref_obj_array.asp	(array)
//	  https://www.w3schools.com/jsref/jsref_obj_string.asp	(string)
//	  https://www.w3schools.com/js/js_objects.asp			(objekt)
//
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 1: Beräkna de totala räntekostnaderna av ett huslån. Ange lånets storlek
//            i kronor, årlig ränta i procent, samt årlig amortering i kronor
//            (rak amortering). Amorteringen görs i slutet av varje år.
//
//      Tips: Använd while-satsen för att ackumulera räntekostnaderna över åren.
//            Lånet löper tills dess att sista kronan är amorterad (återbetald).
//            Lånet löper tills dess att sista kronan är amorterad (återbetald).
//
//==================================================================================
// Parameter inX : ursprungligt lån i kronor 
// Parameter inY : årlig ränta i procent
// Parameter inZ : årlig amortering i kronor
// Return        : den totala räntekostnaden i kronor
function Uppgift1(inX, inY, inZ)
{	
	var totalCost;
	return totalCost;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 2: Tag en text och omvandla den till en rak kolumn med alla ord, men
//            med bara ett ord på varje rad.
//
//      Tips: 1. Använd string-metoden split() för att omvandla strängen till en
//			     array med ord, se länk för string ovan.
// 			  2. Använd kontrollsatsen for...of (se länk) för att hämta varje 
//               ord ur arrayen.
//            3. Placera varje ord med ett nyradstecken "\n" i en sträng och
//				 returnera den.
//
//  Utveckla: Använd /* och */ för att kommentera bort satsen for...of som nämns i
//			  tips 2 och skriv samma funktionalitet med for-satsen, dvs:
//
//							for (var i = 0; i < wordArray.length; ++i) { ... }
//
//      Tips: I for-satsens kodblock, indexera wordArray med variabeln i för att
//			  få access till varje ord.
//
//==================================================================================
// Parameter inX : textsträng som ska delas upp i ord
// Return        : textsträngen med ett ord per rad i en rak kolumn
function Uppgift2(inX)
{
	var wordArray; // använd för att lagra orden som en array
    var wordColumnStr; // använd för att lagra strängen som ska bli en kolumn av ord
	
	
	return wordColumnStr;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 3: Utvekla lösningen med resultatlistan i den tredje uppgiften av
//            "Datastrukturer" genom att använda en lämplig kontrollstruktur för att
//            iterera (loopa) igenom listan när den ska presenteras. Lyckades du inte
//            tidigare kanske du klarar det nu.
//
//==================================================================================
// Parameter inX : ett namn
// Parameter inY : ett poängresultat
// Return        : en sträng med alla namn och deras respektive poängresultat
function Uppgift3(inX, inY)
{
	/* Utgå från din tidigare kod för uppgift 3 från "Uppgift Datastrukturer" */
}
