// Bengt Johansson 2019-09-30
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
//    https://www.w3schools.com/js/js_functions.asp 		(funktioner)
//	  https://www.w3schools.com/jsref/jsref_obj_array.asp	(array)
//	  https://www.w3schools.com/jsref/jsref_obj_string.asp	(string)
//	  https://www.w3schools.com/js/js_objects.asp			(objekt)
//
////////////////////////////////////////////////////////////////////////////////////

/* Konto i banken
 ________________________________
|            Account		     |
|--------------------------------|
| holderName : <name>			 |
| number     : <account number>	 |
| balance    : <amount SEK>		 |
|________________________________|*/
var Account = function(holderName)
{
	this.holderName = holderName;
	this.accountNbr = nextFreeAccountNbr++;
    this.balance = 0;
}

// Nästa lediga kontonummer
var nextFreeAccountNbr = 123000;


/* Bankens alla konton
 _______________________________________________________________________ __ _ _ _
|   ___________   |   ___________   |   ___________   |   ___________   |
|  /           \  |  /           \  |  /           \  |  /           \  |
| |  account 0  | | |  account 1  | | |  account 2  | | |  account 3  | |
|  \___________/  |  \___________/  |  \___________/  |  \___________/  |
|_________________|_________________|_________________|_________________|__ _ _ _*/
var bankAccounts = [];
function CreateAccount(holderName, deposit = 0)
{
    var account = new Account(holderName);
		account.balance = deposit;
		bankAccounts.push(account);
	console.log(bankAccounts);
		return account;
}

function ViewAccount(account)
{
	var dunno = bankAccounts[account];
	return dunno.holderName;
}

function GetAccount(accountNbr)
{
	for (var i = 0; i < bankAccounts.length; i++) {
		if (bankAccounts[i].accountNbr == accountNbr){
			return bankAccounts[i];
		}
	}
	return null;
}

/* Transaktion mellan konton
 _________________________________
|          Transaction		      |
|---------------------------------|
| fromAccount : <account number>  |
| toAccount   : <account number>  |
| amount      : <amount SEK>	  |
| timeStamp	  : <date-time>		  |
|_________________________________|*/
var transaction = function (fromAccount, toAccount, amount)
{
	this.fromAccount = fromAccount;
	this.toAccount = toAccount;
	this.amount = amount;
	this.timeStamp = new Date(); // Tidsstämpel
}

/* Bankens alla transaktioner som någonsin gjorts mellan konton
 _______________________________________ ___________________ __ _ _ _
|	_____________	|	_____________	|   _____________	|
|  /             \  |  /             \  |  /             \  |
| | transaction 0 | | | transaction 1 | | | transaction 2 | |
|  \_____________/  |  \_____________/  |  \_____________/  |
|___________________|___________________|___________________|__ _ _ _*/
var bankLedger = [];

/* Definiera din funktion som gör en transaktion här */
function Transfer(fromAccount, toAccount, amount)
{
  var froAcc = GetAccount(fromAccount);
	var toAcc = GetAccount(toAccount);
	if (froAcc == null || toAcc == null) {
     return null;
	}
	 froAcc.balance -= amount;
	 toAcc.balance += amount;

	 var trans = new transaction(fromAccount, toAccount, amount);
	 return trans;
}

function ViewTransaction(trans, )
{
	return "From account:" + trans.fromAccount + "Balance:" + froAcc.balance +  "\n" + "To account:" + trans.toAccount + "Balance:" + toAcc.balance + "\n" + "Transfer amount:" + trans.amount;
}

////////////////////////////////////////////////////////////////////////////////////
// Uppgift 1: Du ska hantera en liten bankverksamhet och behöver kunna administrera
//            alla konton i banken. Det finns förberedda datastrukturer ovan. Några
//			  funktioner som anges nedan ska implementeras och användas för att
//			  underlätta lösningen och tygligöra koden.
//			  I den här uppgiften ska du skapa ett nytt konto åt en användare.
//			  Kontot kan ges en initial insättning men den kan även utlämnas och då
//			  ska kontot skapas med 0 kr i saldo. När kontot skapats ska det placeras
//            i datastrukturen bankAcounts, se ovan.
//
//		Krav: Följande hjälp-funktioner ska implementeras:
//
//            	CreateAccount() -> skapar ett nytt konto i banken åt en person och
//                                 sätter in ett initialt belopp om det anges något
//					- parameter holdersName : namnet på kontots nya ägare
//					- parameter deposit		: en initial insättning i kronor
//
//              ViewAccount() -> returnerar en sträng med kontots innehåll
//					- parameter account : kontot som ska presenteras
//              	- return 			: formaterad sträng med kontots innehåll
//
//     Tips1: Använd konstruktorn Account(name) för att skapa ett
//            kontoobjekt, t ex så här: new account("Kalle", 0);
//            Operatorn new returnerar objektet och du måste se till att det läggs
//            in bland övriga konton. Se object constructors:
//			  		https://www.w3schools.com/js/js_object_constructors.asp
//
//	   Tips2: Parametern deposit kan ges ett default värde så behöver den inte anges
//            om kontot ska skapas utan en initial insättning. Se default parameters:
//            		https://www.w3schools.com/js/js_function_parameters.asp
//
//==================================================================================
// Parameter inX : namnet på kontoinnehavaren
// Parameter inX : en möjlig insättning i kronor
// Return        : Sträng med aktuell transaktion <datum-tid> : <belopp> : <text>
function Uppgift1(inX, inY)
{
 var acc = CreateAccount(inX, inY);
 console.log(bankAccounts);

	return "Namn: " + acc.holderName + " " + "\n" + "Summa:" + acc.balance + " Kr" + "\n" + "Account number: " + acc.accountNbr;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 2: Uppgiften är att visa ett specifikt konto med alla data: kontonummer,
//			  ägare och saldo. För att underlätta lösningen och tyddliggöra koden
//			  ska en hjälp-funktion användas, se nedan.
//
//     Krav1: Följande funktion ska implementeras:
//
//			  	GetAccount(accountNbr) -> hämtar ett konto med givet kontonummer
//					- paramter accountNbr: kontonumret som söks
//					- return			 : kontot som kontonumret tillhör
//
//		Tips: Använd kontrollsatsen for eller for..of samt if och break för att söka
//            upp ett konto i banken. En for-loop går igenom alla konton och det
//            gäller att bryta och returnera rätt konto när det hittats. Se:
//
//			  	for..of: https://www.w3schools.com/jsref/jsref_forof.asp
//			  	break  : https://www.w3schools.com/jsref/jsref_break.asp
//
//  Utveckla: Hantera fallet att ett eftersökt konto inte finns och ge användaren
//			  en ursäkt och förklaring till det inträffade.
//
//		Tips: Se till att GetAccount() upptäcker att kontot saknas och i så fall
//			  att den returnerar värdet null istället för konto-objektet.
//
//==================================================================================
// Parameter inX : kontonumret till det eftersökta kontot
// Return        : textsträng med kontots innehåll
function Uppgift2(inX)
{
	var bol = GetAccount(inX);
	return "Namn: " + bol.holderName + "\nSumma: " + bol.balance + "KR" + "\nkontonummer:  " + bol.accountNbr ;
}


////////////////////////////////////////////////////////////////////////////////////
// Uppgift 3: Banken behöver kunna utföra transaktioner mellan konton. Uppgiften
//			  är att skapa en transaktion för detta och överföra pengarna mellan
// 			  de två inblandade kontona. Transaktioner ska sparas i bankens huvudbok
//            bankLedger, se ovan.
//
//     Krav1: Följande funktion ska implementeras:
//
//				Transfer() -> skapar en transaktion och överför ett belopp mellan
//						      två konton
//				    - parameter fromAccount :
//					- parameter toAccount	:
//					- parameter	amount	 	:
//					- return				: transaktionen om genomförd annars null
//
//				ViewTransaction(transaction) -> visar en transaktion med datum och tid
//				    - parameter transaction : transaktionen som ska visas
//				    - return                : textsträng som visar en transaktion
//
//				ViewTransactionHist(nbrDays) -> visar alla transaktioner med datum
//												som skett de senaste antal dagarna
//				    - parameter nbrDays  	: antal dagar tillbaka som ska visas
//				    - return                : textsträng som visar alla transaktioner
//
//		Tips: Använd javascript-objektet Date med lämpliga metoder, se:
//				https://www.w3schools.com/jsref/jsref_obj_date.asp
//
//==================================================================================
// Parameter inX : betalande kontot som kontonummer
// Parameter inY : mottagande kontot som kontonummer
// Parameter inZ : belopp som <kronor>.<ören>
// Return        : en textsträng med resultatet av tranasaktionen
function Uppgift3(inX, inY, inZ)
{
 var trans = Transfer(inX, inY, inZ);
 if (trans == null) {
 	return "Felaktigt";
 }

 return "From account:" + trans.fromAccount + "\n" + "To account:" + trans.toAccount + "\n" + "Transfer amount:" + trans.amount;

 var konto1 = GetAccount(inX);
 var konto2 = GetAccount(inY);
 if(trans == true){
	return "Namn: " + konto1.holderName + "\nSumma: " + konto1.balance + "kr" + "\nkontonummer:  " + konto1.accountNbr && "Namn: " + konto2.holderName + "\nSumma: " + konto2.balance + "kr" + "\nkontonummer:  " + konto2.accountNbr   ;
 }
   return ViewTransaction(trans);
}
