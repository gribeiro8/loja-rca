var express = require('express');
var path = require('path');
var consign = require('consign');
var moment = require('moment');

var app = express();

const allowCors = require('./cors')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(allowCors);

//CORS bypass
app.use(function(req, res, next) {
    //must be included these first two
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname = '../client/build/index.html')); })
}



consign({ locale: 'pt-br', })
    .include('controller')
    .then('routes')
    .into(app);

module.exports = app;

const port = process.env.PORT || 5000;
app.listen(port, function(req, res) {
    console.log('Server running - ' + port);
});