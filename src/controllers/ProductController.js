const express = require('express');
const ProductReposistory = require('../repository/ProductRepository');
const paths = require('../utils/ConstantsPaths');


const routes = express.Router();

routes.get('/products', ProductReposistory.list);
routes.post('/products', ProductReposistory.save);
routes.get('/products/:id', ProductReposistory.getById);
routes.put('/products/:id', ProductReposistory.update);
routes.delete('/products/:id', ProductReposistory.delete);



module.exports = routes;
