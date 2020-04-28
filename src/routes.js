const express = require('express');
const routes = express.Router();
const userController = require('./api/UserController');

const Routes = [

    userController
];

module.exports = routes.use(Routes);