'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log("conexion exitosa");
    }).catch( err => console.log(err));