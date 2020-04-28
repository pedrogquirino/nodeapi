const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const paths = require('./utils/ConstantsPaths');
const routes = require('./routes');


const app = express();
app.use(express.json());

const connection  = mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    // 'mongodb://mongodb:27017/nodeapi', 
        { useNewUrlParser: true, 
            useUnifiedTopology: true  
        }
    );

app.use(
    connection,
    requireDir('./model'),
    paths.BASE_PATH, 
    require('./routes')
    );


module.exports = app;