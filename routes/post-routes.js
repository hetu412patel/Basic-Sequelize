const express = require('express')
const router = new express.Router()

const { createPost, queryPost, allPost } = require('../controller/post-controller')

router.post('/create-post', createPost)
router.get('/query-post',queryPost)
router.get('/all-post',allPost)

module.exports = router;