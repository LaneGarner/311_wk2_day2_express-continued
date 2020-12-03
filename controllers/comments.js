const comments = require('../data/comments.js')

const list = (req, res) => res.json(comments)


const show = (req, res) => res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))

const create = (req, res) => {
    comments.push({
        _id: comments.length + 1,
        ...req.body
    })
    res.json(comments)
}

module.exports = {
    list,
    show,
    create
}