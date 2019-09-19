'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre : String,
    apellido: String
});

module.exports = mongoose.model('User', UserSchema);