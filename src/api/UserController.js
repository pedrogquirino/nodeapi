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

        if(users.length == 0) {
            res.status(204).send();
        }
        else {
            res.json(users);
        }            
    }
);

routes.get('/users/:id', 
    async (req, res, next) => {

        const id = req.params.id;        
        const user = await userService.findById(id);

        if(user == null) {
            res.status(404).send();
        }
        else {
            res.json(user);
        }        

    }
);

routes.post('/users', 
    async (req, res) => {

        const userDto = req.body;

        const user = await userService.save(userDto);
        res.json(user);
    }
);

routes.put('/users/:id', 
    async (req, res) => {

        const userDto = req.body;

        const user = await userService.update(req.params.id, userDto);

        if(user == null) {
            res.status(404).send();
        }
        else {
            res.json(user);
        }        
    }
);

// routes.delete('/users/:id', UserRepository.delete);

module.exports = routes;
