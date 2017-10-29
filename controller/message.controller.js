var Message = require('../models/message');
module.exports = {
        post: function (req, res) {
            console.log(req.body);
            req.body.users=req.user;
            var msg = new Message(req.body);
            msg.save();
            res.status(200);
            res.end("success");
        },
        get: function getList(req, res) {
                Message.find({}).populate('users','-pwd').exec(function (err, result) {
                        res.send(result);
                    })


                }
}
