'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    nombre : String,
    apellido: String
});

//mongoose se ancarga de igual Project -> projects(portafolio de mongo)
module.exports = mongoose.model('User', ProjectSchema);