const moment = require('moment');
class usersController {

    async login(req, res) {
        console.log(req.body);
        if (req.body.user === "t@t.com" && req.body.password === "123") {
            res.status(200).send({ status: true, name: "Gabriel" });
        } else {
            res.status(200).send({ status: false });
        }
    };


}
module.exports = new usersController()