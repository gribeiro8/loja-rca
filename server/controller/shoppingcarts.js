const moment = require('moment');
class shopController {

    async cart(req, res) {
        res.json({
            "products": [{
                    "id": 0,
                    "title": "Days Gone",
                    "price": "127",
                    "console": "Ps4",
                    "img": "game-2.png",
                    "total": 1
                },
                {
                    "id": 1,
                    "title": "God of War",
                    "price": "60",
                    "console": "Ps4",
                    "img": "game-1.png",
                    "total": 2
                },
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