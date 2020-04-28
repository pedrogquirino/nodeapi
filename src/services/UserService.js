const UserRepository = require('../repository/UserRepository');


const UserService = {

    async listWithPagination(Pagination) {
        
        return await UserRepository.listWithPagination(Pagination);
    },

    async findById(id) {

        return await UserRepository.findById(id);        
    },

    async save(userDto) {

        return await UserRepository.save(userDto);
    },

    async update(id, user) {
        
        return await UserRepository.update(id, user, { new: true });        
    },

    async delete(id) {

        return await UserRepository.findByIdAndRemove(id);        
    },

}

module.exports = UserService;