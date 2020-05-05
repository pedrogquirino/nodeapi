const express = require('express');
const routes = express.Router();
const userRouter = require('./routes/UserRouter');

const Routes = [

    userRouter
];

module.exports = routes.use(Routes);