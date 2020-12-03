const vehicles = require('../data/vehicles.js')

const list = (req, res) => res.json(vehicles)

const show = (req, res) => res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))

const create = (req, res) => {
    vehicles.push({
        _id: vehicles.length + 1,
        ...req.body
    })
    res.json(vehicles)
}

module.exports = {
    list,
    show,
    create
}