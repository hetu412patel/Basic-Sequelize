const express = require('express')
const router = new express.Router()

const { createTag, getAllTag,updateTag, deleteTag, queryTag } = require('../controller/tag-controller')

router.post('/create-tag', createTag)
router.get('/all-tag',getAllTag)
router.put("/update-tag",updateTag)
router.delete("/delete-tag",deleteTag)
router.get("/query-tag",queryTag)

module.exports = router;