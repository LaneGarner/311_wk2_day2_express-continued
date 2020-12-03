const comments = require('../data/comments.js')

module.exports.list = (req, res) => res.json(comments)


module.exports.show = (req, res) => res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))

module.exports.create = (req, res) => {
    comments.push({
        _id: comments.length + 1,
        ...req.body
    })
    res.json(comments)
}

// module.exports = {
//     list,
//     show,
//     create
// }