
var randomNumber1= 1+Math.floor(6*Math.random());
var name = "images/dice"+randomNumber1+".png";
document.body.querySelector(".img1").setAttribute("src",name);


var randomNumber2= 1+Math.floor(6*Math.random());
var name = "images/dice"+randomNumber2+".png";
document.body.querySelector(".img2").setAttribute("src",name);

var winner=(randomNumber1==randomNumber2) ?null : ((randomNumber1 > randomNumber2) ?"Player1":"Player2") ;

document.querySelector("#result").innerHTML= (winner==null)?"Draw": winner+" is the winner";
