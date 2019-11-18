const controller = require('../controller/users');

module.exports = (application) => {

    application
        .route('/users/login')
        .post(controller.login);

    application
        .route('/users/logout')
        .post(controller.logout);



};