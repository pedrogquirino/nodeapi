const express = require('express');
const ProductReposistory = require('../repository/ProductRepository');
const paths = require('../utils/ConstantsPaths');


const routes = express.Router();

routes.get('/products', ProductReposistory.list);
routes.get('/products/:id', ProductReposistory.getById);
routes.put('/products/:id', ProductReposistory.update);
routes.post('/products', ProductReposistory.save);

module.exports = routes;
