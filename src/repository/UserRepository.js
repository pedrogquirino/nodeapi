const mongoose = require('mongoose');
const User = mongoose.model('User');


const UserRepository = {

    async listWithPagination(pagination) {

        var users = [];

        try {            
            users = await User.paginate({},{ pagination });                     
        }
        catch (e){            
            throw e;
        }

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
        
        try {
            return await User.findOneAndDelete(id);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        
    }

}

module.exports = UserRepository;