var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongoose');
var msg=require('./controller/message.controller');
var register=require('./controller/register');
var cors=require('./services/cors.service');
var authentication=require('./services/checkAuthentication.service');
var app=express();

app.use(bodyParser.json());

app.use(cors);



app.get('/api/getMessage',msg.get);

app.post('/api/postMessage',authentication,msg.post);

app.post('/api/signup',register.signup);

app.post('/api/login',register.login);




mongo.connect("mongodb://localhost:27017/test",function(err,db){
    console.log('connected to mongo db');
       
});

var server=app.listen(5000,function(){
    console.log('listening on '+server.address().port);
});