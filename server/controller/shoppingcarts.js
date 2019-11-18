const moment = require('moment');
class shopController {

    async index(req, res) {

        res.json({
            "cart": [{
                    "id": 1,
                    "quant": 1
                },
                {
                    "id": 3,
                    "quant": 2
                }
            ]
        })
    };


    async add(req, res) {
        console.log("ADD: " + req.body.id);
        if (req.body.id) {
            res.status(200).send({ status: true });
        }
    };

    async remove(req, res) {
        console.log("REMOVE: " + req.body.id);
        if (req.body.id) {
            res.status(200).send({ status: true });
        }
    };


}
module.exports = new shopController()