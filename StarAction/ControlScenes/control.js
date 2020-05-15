/*Spelare 2 informations box*/
function p2Info(){
    var c = document.getElementById("p2Info")
    var ctx = c.getContext("2d");
    var header;
    header = ctx.font = "25px Unispace", ctx.fillText("Spelare 2", 10, 50);
    var shoot;
    shoot = ctx.font = "15px Unispace", ctx.fillText("Shoot: Right Enter", 10, 75);
    var p2Up;
    p2Up = ctx.font = "15px Unispace", ctx.fillText("Up: Up arrow", 10, 100);
    var p2Down;
    p2Down = ctx.font = "15px Unispace", ctx.fillText("Down: Down arrow", 10, 125);
    var p2Left;
    p2Left = ctx.font = "15px Unispace", ctx.fillText("Left: Left arrow", 10, 150);
    var p2Right;
    p2Right = ctx.font = "15px Unispace", ctx.fillText("Right: Right arrow", 10, 175);
    var p2Color;
    p2Right = ctx.font = "15px Unispace", ctx.fillText("Color: Cyan", 10, 200);
    
  };
  /*Spelare 1 informations box*/
  function p1Info(){
    var c = document.getElementById("p1Info")
    var ctx = c.getContext("2d");
    var header;
    header = ctx.font = "25px Unispace", ctx.fillText("Spelare 1", 10, 50);
    var shoot;
    shoot = ctx.font = "15px Unispace", ctx.fillText("Shoot: T", 10, 75);
    var p1Up;
    p1Up = ctx.font = "15px Unispace", ctx.fillText("Up: W", 10, 100);
    var p1Down;
    p1Down = ctx.font = "15px Unispace", ctx.fillText("Down: S", 10, 125);
    var p1Left;
    p1Left = ctx.font = "15px Unispace", ctx.fillText("Left: A", 10, 150);
    var p1Right;
    p1Right = ctx.font = "15px Unispace", ctx.fillText("Right: D", 10, 175);
    var p1Color;
    p1Right = ctx.font = "15px Unispace", ctx.fillText("Color: Red", 10, 200);
  };
  /*Funktion för att ta sig till huvudmenyn, med en knapp tex*/
  function backToMenu(){
    var theCollection ="../MainMenu/index.html"
    window.location = theCollection;
}
  //Kallar på funktionärerna ovan
  p1Info();
  p2Info();