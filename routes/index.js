const express = require('express');
const routes = express.Router();
const {fibController, userController} = require('../controllers');
const { createUserMiddleware } = require("../middlewares/userMiddlewares");


routes.get('/fibonacci/:num?', fibController.getFib);

routes.get('/users/', userController.getUsers);
routes.get('/users/:id', userController.getUserById)
routes.post('/users', createUserMiddleware, userController.createUser);
routes.put('/users/:id', createUserMiddleware, userController.updateUser);
routes.delete('/users/:id', userController.deleteUser);


module.exports = routes;

