const express = require('express')
const router = new express.Router()

const { createObject, allObjects, specificObject, deleteObject, queryObjects, updateObject } = require('../controller/object-controller')

router.post('/create-object', createObject)
router.get('/all-object',allObjects)
router.get('/specific-object',specificObject)
router.get('/query-object', queryObjects)
router.delete('/delete-object', deleteObject)
router.put("/update-object",updateObject)

module.exports = router;