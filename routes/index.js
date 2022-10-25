const express = require('express');
const routes = express.Router();
const fibController = require('../controllers/fibController');

routes.get('/fibonacci/:num?', fibController.getFib);

module.exports = routes;

