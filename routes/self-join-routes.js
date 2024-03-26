const express = require('express')
const router = new express.Router()

const { allSelfData } = require('../controller/self-join-controller')

router.get('/all-self-data', allSelfData)

module.exports = router;