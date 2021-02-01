const express = require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var obj = req.body;
  var c=obj.city
  var endpoint = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey="6afa41d5d900fe35eca5752df988addd";
  var units = "metric";

  var url= endpoint+"?appid="+apiKey+"&q="+c+"&units="+units;
  https.get(url,function(response){
    response.on("data",function(data){
      var weatherData = JSON.parse(data);
      var temp = weatherData.main.temp;
      var feelsLike = weatherData.main.feels_like;
      var icon = weatherData.weather[0].icon;
      res.write("<h1>Temperature is "+temp+" ,but feels like "+feelsLike+"</h1>");
      res.send();
    });
  });
});

app.listen(3000,function(){
  console.log("Listening on port : 3000");
});
