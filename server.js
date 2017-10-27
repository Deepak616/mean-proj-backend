var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());

app.post('/api/postMessage',function(req,res){
    console.log(req.body);
    res.status(200);
    res.end("success");
})

var server=app.listen(5000,function(){
    console.log('listening on '+server.address().port);
})