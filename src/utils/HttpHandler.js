

const NO_CONTENT = { msg: "NO_CONTENT", code: 204 };
const BAD_REQUEST = { msg: "BAD_REQUEST", code: 400 };

const HttpCodes = {
    NO_CONTENT,
    BAD_REQUEST,
}



const CheckThrow = (condition, HttpCodes, res) => {

    if(condition){
        return res.status(HttpCodes.code).send();
    }
}

const HttpHandler = {
    HttpCodes,
    CheckThrow,
}

module.exports = HttpHandler;