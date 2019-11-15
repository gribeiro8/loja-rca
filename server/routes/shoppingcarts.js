const controller = require('../controller/shoppingcarts');

module.exports = (application) => {

   application
      .route('/')
      .get(controller.index);

 

};