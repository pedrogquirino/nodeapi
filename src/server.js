const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const paths = require('./utils/ConstantsPaths')


const app = express();
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    //'mongodb://mongodb:27017/nodeapi', 
        { useNewUrlParser: true, 
            useUnifiedTopology: true  
        }
    );

requireDir('./model');

app.use(paths.BASE_PATH, require('./routes'));

app.listen(3000);

