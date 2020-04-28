const { check } = require('express-validator');


const validator = [
    check('dataNascimento').not().isEmpty(),
    check('sexo').isIn('M', 'F'),
]


const UserRequest = {

    nome: String,
    sexo: String,
    dataNascimento: Date,
    validator: validator,
}


module.exports = UserRequest;