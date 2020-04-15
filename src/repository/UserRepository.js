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
            throw new Error('Deu merda', 503);
        }

        return users;
    },

    async list() {
        
        const users = await User.find();
        return users;
    },

    async findById(id) {

        const user = await User.findById(id);
        return user;
    },

    async save(newUser) {

        const user = await User.create(newUser);
        return user;
    },

    async update(id, user) {

        const userUpdated = await User.findByIdAndUpdate(id, user, { new: true });
        return userUpdated;
    },

    async delete(id) {

        await User.findByIdAndRemove(id);      
    },

}

module.exports = UserRepository;