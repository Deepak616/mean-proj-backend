var Message = require('../models/message');
module.exports = {
        post: function (req, res) {
            console.log(req.body);
            var msg = new Message(req.body);
            msg.save();
            res.status(200);
            res.end("success");
        },
        get: function getList(req, res) {
                Message.find({}).exec(function (err, result) {
                        res.send(result);
                    })


                }
}
