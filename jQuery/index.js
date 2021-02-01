
$("h1").on("mouseover",function(event){
  $("h1").css("color","purple");
  setTimeout(function(){$("h1").css("color","black");},500)
});
