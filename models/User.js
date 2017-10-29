var mongo=require('mongoose');
module.exports=mongo.model('user',{
    email:String,
    pwd:String
})