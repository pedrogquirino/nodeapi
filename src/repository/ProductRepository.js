const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const ProductReposistory = {

    async list(req, res) {

        const products = await Product.find();
        return res.json(products);
    },

    async getById(req, res) {

        // const products = await Product.findById(res.json().)
        // return res.json(products);
    },

    async save(req, res) {

        // const products = req.json();
        // Product.sto
        // return res.json
    },

}

module.exports = ProductReposistory;