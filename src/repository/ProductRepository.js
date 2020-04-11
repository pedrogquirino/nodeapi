const mongoose = require('mongoose');
const Pagination = require('../utils/Pagination');

const Product = mongoose.model('Product');


const ProductReposistory = {

    async list(req, res) {
        
        const page  = req.query.page;
        const limit = parseInt(req.query.limit);

        const products = await Product.paginate({},{ page, limit });
        return res.json(products);
    },

    async getById(req, res) {

        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async save(req, res) {

        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async delete(req, res) {

        await Product.findByIdAndRemove(req.params.id);
        return res.send();        
    },

}

module.exports = ProductReposistory;