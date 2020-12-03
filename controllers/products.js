const products = require('../data/products.js')

exports.list = (req, res) => res.json(products)

exports.show = (req, res) => res.json(products.filter(product => product._id === parseInt(req.params.id)))

exports.create = (req, res) => {
    products.push({
        _id: products.length + 1,
        ...req.body
    })
    res.json(products)
}


// module.exports = {
//     list,
//     show,
//     create
// }