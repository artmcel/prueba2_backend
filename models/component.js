'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const ComponentSchema = Schema({
    numero: Number,
    genero: String
});

module.exports = mongoose.model('Component', ComponentSchema);