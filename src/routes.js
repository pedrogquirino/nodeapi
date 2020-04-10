const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController');

const Routes = [

    productController

];

module.exports = routes.use(Routes);