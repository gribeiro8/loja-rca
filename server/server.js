var express = require('express');
var path = require('path');
var consign = require('consign');
var moment = require('moment');

var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


consign({ locale: 'pt-br', })
  .include('controller')
  .then('routes')
  .into(app);

module.exports = app;

var porta = 5000;
app.listen(porta, function (req, res) {
  console.log('Server running - ' + porta);
});
