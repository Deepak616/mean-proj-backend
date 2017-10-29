var mongo=require('mongoose');
module.exports=mongo.model('messages',{
    msg:String,
    users:{type:mongo.Schema.ObjectId,ref:'user'}
});