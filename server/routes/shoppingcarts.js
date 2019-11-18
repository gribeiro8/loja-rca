const controller = require('../controller/shoppingcarts');

module.exports = (application) => {
    application
        .route('/cart')
        .get(controller.cart);

    application
        .route('/cart/add')
        .post(controller.add);

    application
        .route('/cart/remove')
        .post(controller.remove);

};