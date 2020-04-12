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

    async save(User) {

        const user = await User.create(User);
        return user;
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

module.exports = UserService;