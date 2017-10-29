var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongoose');
var msg=require('./controller/message.controller');
var register=require('./controller/register');
var app=express();

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.get('/api/getMessage',msg.get);

app.post('/api/postMessage',msg.post);

app.post('/api/signup',register);




mongo.connect("mongodb://localhost:27017/test",function(err,db){
    console.log('connected to mongo db');
       
});

var server=app.listen(5000,function(){
    console.log('listening on '+server.address().port);
});