var User=require('../models/user');
var jwt=require('jwt-simple');
var moment=require('moment');
module.exports={
    signup:function(req,res){
    var user=new User(req.body);
    User.find({email:req.body.email}).exec(function(err,result){
        console.log(result);
        if(result.length>0){
            res.status(409).send({message:"email id already exists"});
        }
        else{
            user.save(function(err,result){
                if(err)
                    res.status(500).send({message:"internal server error"});
                else
                    res.status(200).send({token:generateJwtToken(result)});
            })
        }
    })
    
},
    login:function(req,res){
     User.findOne({email:req.body.email}).exec(function(err,result){
         if(err)
             res.status(500).send({"message":"internal server error"})
         else{
             console.log(result);
             if(!result){
                 res.status(401).send({message:"no user found"})
             }
             else if(result.pwd!=req.body.pwd){
                 res.status(401).send({message:"invalid password"})
             }
             else{
                 res.status(200).send({token:generateJwtToken(result)})
             }
         }
     })
}
}

function generateJwtToken(user){
    var obj={
        sub:user._id,
        iat:moment().unix,
        exp:moment().add("days",14).unix
    }
    return jwt.encode(obj,"secret");
}