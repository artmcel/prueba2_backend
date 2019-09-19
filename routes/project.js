'use strict'

 var express = require('express');
 var ProjectController = require('../controllers/project');

 var router = express.Router();

 router.get('/home', ProjectController.home);
 router.post('/test', ProjectController.test);
 router.get('/usuarios', ProjectController.getProjects);
 //router.get('/usuarios2', ProjectController.getProjects);

 module.exports = router;