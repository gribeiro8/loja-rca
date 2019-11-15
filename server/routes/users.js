const controller = require('../controller/users');

module.exports = (application) => {

   application
      .route('/users/login')
      .get(controller.login);

 

};