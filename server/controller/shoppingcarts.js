const moment = require('moment');
class shopController {

  async index(req, res) {

      res.json({
         "products" : [
            {
               "title": "TLOU 2",
               "price":"199",
               "console":[
                  "PS4"
               ]
            }
         ]
      })
   };

   
}
module.exports = new shopController()
