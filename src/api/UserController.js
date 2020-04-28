const express = require('express');
const userService = require('../services/UserService');
const userRequest = require('../model/UserRequest');
const pagination = require('../utils/Pagination');
const { validationResult } = require('express-validator');

const routes = express.Router();


routes.get('/users',
    async (req, res) => {        

        await userService.listWithPagination(pagination(req))
        .then(users => 
            {                
                if(users.length == 0) {
                    res.status(204).send();
                }
                else {
                    res.json(users);
                }
            }     
        )
        .catch(e => {                
                console.log(e)
                res.status(500).send(e.Error);
            }
        );      
      
    }
);

routes.get('/users/:id', 
    async (req, res, next) => {

        const id = req.params.id;        
        const user = await userService.findById(id);

        if(user == null) {
            res.status(204).send();
        }
        else {
            res.json(user);
        }        

    }
);

routes.post('/users',

    userRequest.validator,
    (req,res, next) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {            
            return res.status(400).send(errors.array());
        }

        next();
    },

    async (req, res) => {
        
        const userDto = req.body;

        const user = await userService.save(userDto);
        return res.json(user);
    }
);

routes.put('/users/:id', 
    async (req, res) => {

        const userDto = req.body;

        const user = await userService.update(req.params.id, userDto);

        if(user == null) {
            res.status(204).send();
        }
        else {
            res.json(user);
        }        
    }
);

// routes.delete('/users/:id', UserRepository.delete);

module.exports = routes;
