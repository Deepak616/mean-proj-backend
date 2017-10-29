var jwt=require('jwt-simple');
var moment=require('moment');

module.exports=function(req,res,next){
    if(!req.header('Authorization')){
       return res.status(401).send({message:'Please ensure request is sent with authentication token'});
       }
    else{
        var token=req.header('Authorization').split(' ')[1];
        var payload=jwt.decode(token,"secret");
        if(payload.exp<=moment().unix){
            return res.status(401).send({message:'Authorization token invalid'})
        }
        req.user=payload.sub;
        next();
    }   
}