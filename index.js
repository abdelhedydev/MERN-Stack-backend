const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//set up express up
const app = express();


//Connect to Mongo debug
mongoose.connect("mongodb://localhost/Mongo");
mongoose.Promise = global.Promise;

//To parse Data Middleware
app.use(bodyParser.json());

//Error Middleware
app.use(function(err,req,res,next){
//console.log(err);
//Send to the front
res.send({error:err.message});
});

//tell express that we have our routes
//initialize routes
app.use('/api',routes);

//listen for request
app.listen(3000,function(){
  console.log('now listening for request');
});
