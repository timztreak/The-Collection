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
// Just dessa uppgifter hanterar främst datastrukturerna struct, array och string.
// Nyckelordet struct saknas dock i javascript. En struct implementeras istället med
// object i javascript. Information finns via länkarna nedan.
//
//    Länkar
//    =============================================================
//    https://www.w3schools.com/jsref/jsref_obj_string.asp  (string)
// 	  https://www.w3schools.com/js/js_objects.asp           (object)
//    https://www.w3schools.com/jsref/jsref_obj_array.asp   (array)
//
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 1: Tag en text och byt ut ett ord i texten mot ett annat ord.
//
//      Tips: Använd string-metoden replace(), se länk ovan.
//
//  Utveckla: Skriv om koden så att samtliga förekomster av ordet byts ut.
//
//      Tips: Sätt in ordet som ska bytas ut i ett reguljärt uttryck, t ex:
//
//                     var replaceMe = "byt ut mig";
//                     var myRegExp = new RegExp(replaceMe, "g");
//
//            Använd sedan det reguljära uttrycket till metoden replace().
//==================================================================================
// Parameter inX : Texten som ska genomsökas
// Parameter inY : Ordet som ska ersättas (eller det reguljära uttrycket för det)
// Parameter inZ : Ordet som ska ersätta det befintliga ordet
// Return        : Texten med utbytt(a) ord
function Uppgift1(inX, inY, inZ)
{
	var modifiedText = inX.replace(inY, inZ);

	return modifiedText;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 2: Skapa en namnlista i vilken ett nytt namn kan läggas till varje gång
//            du trycker på knappen Kör!.
//
//      Tips: Definiera en global variabel för namnlistan i form av en array. Lägg
//            sedan till ett nytt namn i den varje gång funktionen anropas. En array
//            kan konverteras till en sträng, vilket är lämpligt för resultatet som
//            ska returneras.
//
//  Utveckla: Sortera namnlistan innan den visas.
//
//      Tips: Använd array-metoden sort(), se länk ovan.
//==================================================================================
// Parameter inX : ett namn
// Return        : en sträng med alla namn i listan
var names = [""];
function Uppgift2(inX)
{

	names.push(inX);
	names.sort();


	return "Namn: " + names;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 3: Skapa en resultatlista med poster bestående av poäng och namn. Begränsa
//            listan till max 5 poster. En ny post ska läggas till vid varje klick
//            på knappen Kör!. När listan är full ska den äldsta posten avlägsnas.
//            Visa hela listan med en post (poäng och namn) per rad.
//
//      Tips: 1: Definiera en global variabel med en tom array som får representera
//               en tom resultatlista.
//            2: Låt funktionen skapa en ny post i form av ett objekt, t ex:
//
//                         var newPost = {name : "Homer", score : 0};

//               Använd lämpliga lokala variabler för att bygga en sådan post från
//               indatat.
//            3: Lägg in den nya posten längst fram i resultatlistan med array-metoden
//               unshift().
//            4: Avlägsna posten längst bak i listan med hjälp av en annan metod
//               som du finner via länk ovan.
//            5: Hämta varje post ur poänglistan och sätt samman en resultatsträng
//               av alla namn och poäng under användandet av operatorn '+'.
//
//
//  Utveckla: Håll listan sorterad efter poäng och behåll bara de 5 bästa resultaten.
//
//      Tips: Använd arraymetoden sort() igen. För att den ska sortera tal korrekt
//            så måste en jämförelse-funktion användas till metoden, se länk:
//            https://www.w3schools.com/jsref/jsref_sort.asp
//==================================================================================
// Parameter inX : ett namn
// Parameter inY : ett poängresultat
// Return        : en sträng med alla namn och deras respektive poängresultat
var scoreBoard = [];
function Uppgift3(inX, inY)
{
	var df = "\n";

	function post(name, points)
	{
	this.name = name;
	this.points = points;
	}

	post.prototype.toString = function postToString()
	{
		return "Name : " + this.name + " Points : " + this.points + df;
	}

  var poster = new post (inX, inY);


 scoreBoard.unshift(poster);
 scoreBoard.length = 5;
 scoreBoard.sort(function(a, b){return b.points - a.points});
 return scoreBoard.join('');
}
