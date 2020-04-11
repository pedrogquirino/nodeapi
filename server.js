const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const paths = require('./src/utils/ConstantsPaths')


const app = express();
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    // 'mongodb://mongodb:27017/nodeapi', 
        { useNewUrlParser: true, 
            useUnifiedTopology: true  
        }
    );

requireDir('./src/model');

app.use(paths.BASE_PATH, require('./src/routes'));

app.listen(3000);




