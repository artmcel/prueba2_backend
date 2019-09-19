'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( ()=> {
    console.log("conexion exitosa");
    
    //server
    app.listen(port, () =>{
        console.log("servidor arriba");
    });



}).catch( err => console.log(err));