const vehicles = require('../data/vehicles.js')

module.exports.list = (req, res) => res.json(vehicles)

module.exports.show = (req, res) => res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))

module.exports.create = (req, res) => {
    vehicles.push({
        _id: vehicles.length + 1,
        ...req.body
    })
    res.json(vehicles)
}

// module.exports = {
//     list,
//     show,
//     create
// }