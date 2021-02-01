alert("hurray");


var randomNumber1= 1+Math.floor(6*Math.random());
var name = "dice"+randomNumber1+".png";
document.body.getElemenyById("img1").setAttribute("src","img/name");


var randomNumber2= 1+Math.floor(6*Math.random());
var name = "dice"+randomNumber1+".png";
document.body.getElemenyById("img2").setAttribute("src","img/name");

var winner=(randomNumber1==randomNumber2)?null: ((randomNumber1 > randomNumber2)?"Player1":"Player2") ;
