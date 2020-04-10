const express = require('express');
const ProductReposistory = require('../repository/ProductRepository');


const routes = express.Router();


routes.get('/products', ProductReposistory.list);
routes.post('/products', ProductReposistory.save);

module.exports = routes;
