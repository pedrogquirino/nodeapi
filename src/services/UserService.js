const UserRepository = require('../repository/UserRepository');


const UserService = {

    async listWithPagination(Pagination) {
        const users = await UserRepository.listWithPagination(Pagination);
        return users;
    },

    async findById(id) {

        const user = await UserRepository.findById(id);        
        return user;
    },

    async save(userDto) {

        const user = await UserRepository.save(userDto);
        return user;
    },

    async update(id, user) {

        const userUpdated = await UserRepository.update(id, user, { new: true });
        return userUpdated;
    },

    async delete(id) {

        await UserRepository.findByIdAndRemove(id);
        return res.send();        
    },

}

module.exports = UserService;