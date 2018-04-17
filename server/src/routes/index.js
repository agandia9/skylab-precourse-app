const express = require('express')
const {gets,posts,puts,deletes} = require('./handlers')

const router = express.Router()

router.get('/get', gets)

router.post('/post', posts)

router.put('/put', puts)

router.delete('/delete', deletes)

module.exports = router