'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargamos archivos de rutas
var project_routes = require('./routes/project');

app.use(bodyParser.urlencoded({extended:false}));

//convertir cualquie dato a json
app.use(bodyParser.json());


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//ruta para test en postman
/*
app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Petticion exitosa</h1>"
    );
});
*/

//rutas
app.use('/api', project_routes);

module.exports = app;