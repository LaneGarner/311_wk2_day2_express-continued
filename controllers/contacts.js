const contacts = require('../data/contacts.js')

exports.list = (req, res) => res.json(contacts)


exports.show = (req, res) => res.json(contacts.filter(contact => contact._id === parseInt(req.params.id)))

exports.create = (req, res) => {
    contacts.push({
        _id: contacts.length + 1,
        ...req.body
    })
    res.json(contacts)
}

// module.exports = {
//     list,
//     show,
//     create
// }