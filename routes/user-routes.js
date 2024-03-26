const express = require('express')
const router = new express.Router()

const { createUser, getUsers, deleteUser, updateUser, queryUser, rawQuery } = require('../controller/user-controller')

router.post('/create-user', createUser)
router.get('/all-user',getUsers)
router.delete('/delete-user',deleteUser)
router.put('/update-user',updateUser)
router.get("/query-user",queryUser)
router.get("/raw-query",rawQuery)

module.exports = router;