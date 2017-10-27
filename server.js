var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongodb').MongoClient;
var app=express();
var database;
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.post('/api/postMessage',function(req,res){
    console.log(req.body);
    database.collection('messages').insertOne(req.body);
    res.status(200);
    res.end("success");
});

mongo.connect("mongodb://localhost:27017/test",function(err,db){
    console.log('connected to mongo db');
    database=db;
});

var server=app.listen(5000,function(){
    console.log('listening on '+server.address().port);
});