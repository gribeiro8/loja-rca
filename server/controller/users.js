const moment = require('moment');
class usersController {

  async login(req, res) {


     res.status(200).send({ status: true });
   };

   
}
module.exports = new usersController()
