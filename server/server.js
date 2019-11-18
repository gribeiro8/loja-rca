var express = require('express');
var path = require('path');
var consign = require('consign');
var moment = require('moment');

var app = express();

const allowCors = require('./cors')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(allowCors);


consign({ locale: 'pt-br', })
    .include('controller')
    .then('routes')
    .into(app);

module.exports = app;

const port = process.env.PORT || 5000;
app.listen(port, function(req, res) {
    console.log('Server running - ' + port);
});