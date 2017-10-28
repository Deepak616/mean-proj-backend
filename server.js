var express=require('express');
var bodyParser=require('body-parser');
var mongo=require('mongoose');
var app=express();
var Message=mongo.model('messages',{
    msg:String
});
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.get('/api/getMessage',getList);

app.post('/api/postMessage',function(req,res){
    console.log(req.body);
    var msg=new Message(req.body);
    msg.save();
    res.status(200);
    res.end("success");
});

app.post('/api/signup',function(req,res){
    console.log(req.body);
});

function getList(req,res){
 Message.find({}).exec(function(err,result){
    res.send(result);
});
}

mongo.connect("mongodb://localhost:27017/test",function(err,db){
    console.log('connected to mongo db');
       
});

var server=app.listen(5000,function(){
    console.log('listening on '+server.address().port);
});