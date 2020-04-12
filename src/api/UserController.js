const express = require('express');
const userService = require('../services/UserService');
const httpHandler = require('../utils/HttpHandler')

const routes = express.Router();


routes.get('/users', 
    async (req, res) => {        

        const Pagination = {
            page: req.query.page,            
            limit: req.query.limit,
        }

        const users = await userService.listWithPagination(Pagination);        
        res.json(users);
    }
);

routes.get('/users/:id', 
    async (req, res, next) => {

        const id = req.params.id;        
        const user = await userService.findById(id);
        
        httpHandler.CheckThrow(user == null, httpHandler.HttpCodes.NO_CONTENT, res);        
console.log(user);
        next(res, user);
    },
    (res, user) => {
        res.json({"aasd":"asdas", "asda":"asdas"});        
    }
);
// routes.post('/users', UserRepository.save);
// routes.get('/users/:id', UserRepository.getById);
// routes.put('/users/:id', UserRepository.update);
// routes.delete('/users/:id', UserRepository.delete);

module.exports = routes;
