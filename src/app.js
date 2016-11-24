'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<h4> This is a Havo Bootstrap test</h4>')
})

app.get('/blog', function(req, res){
	res.send(`<h4><stong>This is a MEGA BLOG</stong></h4>`)
})
app.listen(3000, function(){
	console.log('App is up and running on port 3000');
});












//BELLOW IS A NODE JS EXPRESS BOOSTRAP APP FROM
//https://www.codementor.io/codeforgeek/tutorials/build-website-from-scratch-using-expressjs-and-bootstrap-du107sby7

/*

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});*/