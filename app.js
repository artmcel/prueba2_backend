'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

//convertir cualquie dato a json
app.use(bodyParser.json());


//ruta para test en postman

app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Petticion exitosa</h1>"
    );
});


module.exports = app;