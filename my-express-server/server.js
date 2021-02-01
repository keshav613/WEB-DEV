const express = require("express");
const app=express();

app.get("/",function(req,res){
  res.send("<h1>Hey budddddddy, cool</h1>")
});

app.get("/about",function(req,res){
  res.send("Hi, this is keshav");
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
