const express = require('express');
const routes = express.Router();
const userController = require('./controllers/UserController');

const Routes = [

    userController

];

module.exports = routes.use(Routes);