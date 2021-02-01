const express = require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
//when ur webpage trying to get data from "/" route
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
//When ur webpage trying to post from route "/"
app.post("/",function(req,res){
  var obj=req.body;
  var n1 = Number(obj.num1);
  var n2 = Number(obj.num2);
  res.send("Sum is "+ (n1+n2));
});

app.post("/bmicalculator",function(req,res){
  var obj=req.body, w= Number(obj.w) , h= Number(obj.h),
      ans= w/(h*h);
  res.send("Your BMI is "+ans);
});
app.listen(3000,function(){
  console.log("Listening at port : 3000");
});
