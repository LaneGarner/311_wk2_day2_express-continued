const express = require('express')

const router = express.Router()
const CommentController = require('../controllers/comments')

router.get('/comments', CommentController.list)

router.get('/comments/:id', CommentController.show)

router.post('/comments', CommentController.create)

module.exports = router