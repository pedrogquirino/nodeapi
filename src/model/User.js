const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    sexo:{
        type: String,
        required: true,
    },
    dataNascimento:{
        type: Date,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);
