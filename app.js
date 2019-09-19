'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

//convertir cualquie dato a json
app.use(bodyParser.json());


module.exports = app;