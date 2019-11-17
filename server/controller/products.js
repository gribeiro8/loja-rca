const moment = require('moment');
class productsController {

    async list(req, res) {

        res.json({
            "products": [{
                    "id": 1,
                    "title": "TLOU 2",
                    "price": "199",
                    "console": "Ps4",
                    "img": "game-1.png"
                },
                {
                    "id": 2,
                    "title": "Cyberpunk",
                    "price": "200",
                    "console": "Ps4, Pc, Xbox",
                    "img": "game-2.png"
                },
                {
                    "id": 3,
                    "title": "Days Gone",
                    "price": "127",
                    "console": "Ps4",
                    "img": "game-3.png"
                },
                {
                    "id": 4,
                    "title": "God of War",
                    "price": "60",
                    "console": "Ps4",
                    "img": "game-4.png"
                },
            ]
        })
    };


}
module.exports = new productsController()