'use strict'

var User = require('../models/project');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy el Home'
        });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el test del controlador'
        });
    },

    //obtener todos los datos
    getProjects: function (req, res) {
        User.find({}).exec((err, users) => {
            if (err) return res.status(500).send({
                message: 'error al mostrar usuarios.'
            });
            if (!users) return res.status(404).send({
                message: 'No hay usuarios que mostar.'
            });

            return res.status(200).send({
                users
            });
        });
    }
    
};
module.exports = controller;