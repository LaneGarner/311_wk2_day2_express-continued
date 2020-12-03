const products = require('../data/products.js')

const list = (req, res) => res.json(products)

const show = (req, res) => res.json(products.filter(product => product._id === parseInt(req.params.id)))

const create = (req, res) => {
    products.push({
        _id: products.length + 1,
        ...req.body
    })
    res.json(products)
}


module.exports = {
    list,
    show,
    create
}