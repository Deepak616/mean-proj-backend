var mongo=require('mongoose');
module.exports=mongo.model('messages',{
    msg:String
});