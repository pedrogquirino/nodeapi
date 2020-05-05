const express = require('express');
const userService = require('../services/UserService');
const userRequest = require('../model/UserRequest');
const pagination = require('../utils/Pagination');
const { validationResult } = require('express-validator');

const routes = express.Router();


routes.get('/users',
    async (req, res) => {        

        const page = pagination(req);

        await userService.listWithPagination(page)
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

        const user = await userService.findById(req.params.id);

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
    (req, res, next) => {
        
        const errors = validationResult(req);

        if(!errors.isEmpty()) {            
            return res.status(400).send(errors.array());
        }

        next();
    },

    async (req, res) => {
        
        const userDto = req.body;

        const user = await userService.save(userDto);
        return res.status(201).json(user);
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

routes.delete('/users/:id', 
    async(req, res) => {
        await userService.delete(req.params.id)
            .then(u => {
                res.status(200).send();
            })
            .catch( e => {
                res.status(404).send();
            });
    }
);


module.exports = routes;
