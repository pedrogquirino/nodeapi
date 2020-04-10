const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const ProductReposistory = {

    async list(req, res) {

        const products = await Product.find();
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

}

module.exports = ProductReposistory;