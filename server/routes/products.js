const controller = require('../controller/products');

module.exports = (application) => {

   application
      .route('/products/list')
      .get(controller.list);

 

};