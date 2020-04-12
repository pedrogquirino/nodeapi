const mongoose = require('mongoose');
const User = mongoose.model('User');


const UserRepository = {

    async listWithPagination(pagination) {

        var users = [];
        
        const page  = pagination.page;
        const limit = parseInt(pagination.limit);

        try {            
            users = await User.paginate({},{ page, limit });
        }
        catch (Exception){
            console.log(Exception);
        }

        return users;
    },

    async list(req, res) {
        
        const page  = req.query.page;
        const limit = parseInt(req.query.limit);

        const users = await User.paginate({},{ page, limit });
        return res.json(users);
    },

    async findById(id) {

        const user = await User.findById(id);
        return user;
    },

    async save(req, res) {

        const user = await User.create(req.body);
        return res.json(user);
    },

    async update(req, res) {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    async delete(req, res) {

        await User.findByIdAndRemove(req.params.id);
        return res.send();        
    },

}

module.exports = UserRepository;