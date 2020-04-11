const express = require('express');
const UserRepository = require('../repository/UserRepository');

const routes = express.Router();

routes.get('/users', UserRepository.list);
routes.post('/users', UserRepository.save);
routes.get('/users/:id', UserRepository.getById);
routes.put('/users/:id', UserRepository.update);
routes.delete('/users/:id', UserRepository.delete);

module.exports = routes;
