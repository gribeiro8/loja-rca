const moment = require('moment');
class productsController {

    async list(req, res) {

        res.json({
            "products": [{
                    "id": 0,
                    "title": "TLOU 2",
                    "price": "199",
                    "console": "Ps4",
                    "img": "game-4.png",
                    "incart": false
                },
                {
                    "id": 1,
                    "title": "Cyberpunk",
                    "price": "200",
                    "console": "Ps4, Pc, Xbox",
                    "img": "game-3.png",
                    "incart": false
                },
                {
                    "id": 2,
                    "title": "Days Gone",
                    "price": "127",
                    "console": "Ps4",
                    "img": "game-2.png",
                    "incart": true
                },
                {
                    "id": 3,
                    "title": "God of War",
                    "price": "60",
                    "console": "Ps4",
                    "img": "game-1.png",
                    "incart": true
                },
            ]
        })
    };


}
module.exports = new productsController()