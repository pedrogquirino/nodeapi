const { validationResult } = require('express-validator');

const NO_CONTENT = { msg: "NO_CONTENT", code: 204 };
const BAD_REQUEST = { msg: "BAD_REQUEST", code: 400 };

const HttpCodes = {
    NO_CONTENT,
    BAD_REQUEST,
}


const RequestValidator = (req, res, requestValidator) => {

    requestValidator;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {            
        return res.status(400).send(errors.array());
    }

}


const CheckThrow = (condition, HttpCodes) => {

    if(condition){
        res.status(HttpCodes.code).send();
    }
}

const HttpRequest = (req, res) => {

    const errorValidation = validationResult(req);

    if(!validationResult(req).isEmpty()) {
        throw errorValidation;
    }
}

const HandlerError = {
    RequestValidator,
    HttpCodes,
    CheckThrow,
    HttpRequest,
}


module.exports = HandlerError;